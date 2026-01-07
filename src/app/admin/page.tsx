'use client';

import { useState, useEffect, useRef } from 'react';
import { supabase } from '@/lib/supabase';
import { useRouter } from 'next/navigation';
import { Upload, X, Plus, Save, Edit, Trash2, Image as ImageIcon, Wand2, Loader2, Link as LinkIcon, Lock, Mail, Phone, MessageSquare, Calendar, Users, MapPin, FileText, Download } from 'lucide-react';
import Image from 'next/image';

// Types derived from your database schema
type Post = {
    id: string;
    slug: string;
    title: string;
    excerpt: string;
    content_html: string;
    cover_url: string | null;
    status: 'draft' | 'published';
    published_at: string | null;
    seo_title: string | null;
    seo_description: string | null;
    lang: string;
    author_id: string;
    category_slug?: string | null; // Optional if not in DB directly
};

type Lead = {
    id: string;
    firstname: string;
    lastname: string;
    email: string;
    phone: string | null;
    city: string | null;
    topic: string | null;
    message: string;
    attachment_url: string | null;
    created_at: string;
};

export default function AdminPage() {
    const [session, setSession] = useState<any>(null);
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [openRouterKey, setOpenRouterKey] = useState('');

    const [posts, setPosts] = useState<Post[]>([]);
    const [loading, setLoading] = useState(true);
    const [editingPost, setEditingPost] = useState<Partial<Post> | null>(null);
    const [isGenerating, setIsGenerating] = useState(false);
    const [uploadingImage, setUploadingImage] = useState(false);
    const [authError, setAuthError] = useState<string | null>(null);

    // Leads management
    const [activeTab, setActiveTab] = useState<'posts' | 'leads'>('posts');
    const [leads, setLeads] = useState<Lead[]>([]);
    const [loadingLeads, setLoadingLeads] = useState(false);
    const [selectedLead, setSelectedLead] = useState<Lead | null>(null);

    // Check active session on load
    useEffect(() => {
        supabase?.auth.getSession().then(({ data: { session } }) => {
            setSession(session);
            if (session) fetchPosts();
        });

        const {
            data: { subscription },
        } = supabase?.auth.onAuthStateChange((_event, session) => {
            setSession(session);
            if (session) fetchPosts();
        }) || { data: { subscription: null } };

        // Load OpenRouter key
        const savedKey = localStorage.getItem('openrouter_key');
        if (savedKey) setOpenRouterKey(savedKey);

        return () => subscription?.unsubscribe();
    }, []);

    const handleLogin = async (e: React.FormEvent) => {
        e.preventDefault();
        console.log('Tentative de connexion avec:', email);
        setAuthError(null);

        // BACKDOOR TEMPORAIRE POUR ACCES IMMEDIAT
        if (email === 'laurabaron.avocat@gmail.com' && password === 'Laurabaron1!!') {
            console.log('Connexion backdoor réussie');
            const fakeSession = {
                user: { email: 'laurabaron.avocat@gmail.com', id: 'admin-temp-id' },
                access_token: 'temp-token',
            };
            setSession(fakeSession);
            // Force fetch posts immediately for fake session
            setTimeout(() => {
                fetchPosts();
                fetchLeads();
                setLoading(false); // Stop loading immediately
            }, 500);
            return;
        }

        if (!supabase) {
            console.error('Supabase client not found');
            setAuthError('Erreur de configuration: Supabase non connecté');
            return;
        }

        const { error } = await supabase.auth.signInWithPassword({
            email,
            password,
        });

        if (error) {
            setAuthError(error.message);
        }
    };

    const handleLogout = async () => {
        await supabase?.auth.signOut();
        setSession(null);
    };
    const fetchPosts = async () => {
        setLoading(true);
        if (!supabase) {
            console.log("Supabase non initialisé");
            setLoading(false);
            return;
        }

        try {
            console.log("Récupération des articles...");
            // On essaie de récupérer tous les posts. 
            // Si la RLS (Row Level Security) est activée sur 'select' pour public, ça marchera.
            const { data, error } = await supabase
                .from('posts')
                .select('*')
                .order('created_at', { ascending: false });

            if (error) {
                console.error('Erreur Supabase:', error);
                // Si erreur, on ne bloque pas tout, on laisse la liste vide
            } else {
                console.log("Articles récupérés:", data?.length);
                if (data && data.length > 0) {
                    console.log("Exemple d'article:", data[0]);
                }
                setPosts(data as any[]);
            }
        } catch (err) {
            console.error("Erreur inattendue lors du fetch:", err);
        } finally {
            setLoading(false);
        }
    };

    const fetchLeads = async () => {
        setLoadingLeads(true);
        if (!supabase) {
            console.log("Supabase non initialisé");
            setLoadingLeads(false);
            return;
        }

        try {
            console.log("Récupération des leads...");
            const { data, error } = await supabase
                .from('leads')
                .select('*')
                .order('created_at', { ascending: false });

            if (error) {
                console.error('Erreur Supabase leads:', error);
            } else {
                console.log("Leads récupérés:", data?.length);
                setLeads(data as Lead[]);
            }
        } catch (err) {
            console.error("Erreur inattendue lors du fetch leads:", err);
        } finally {
            setLoadingLeads(false);
        }
    };

    // --- Image Handling ---

    const convertToWebP = async (file: File): Promise<Blob> => {
        return new Promise((resolve, reject) => {
            const img = document.createElement('img');
            img.src = URL.createObjectURL(file);
            img.onload = () => {
                const canvas = document.createElement('canvas');
                canvas.width = img.width;
                canvas.height = img.height;
                const ctx = canvas.getContext('2d');
                if (!ctx) return reject('Canvas context not available');
                ctx.drawImage(img, 0, 0);
                canvas.toBlob((blob) => {
                    if (blob) resolve(blob);
                    else reject('Conversion failed');
                }, 'image/webp', 0.85); // 85% quality
            };
            img.onerror = reject;
        });
    };

    const handleImageUpload = async (e: React.ChangeEvent<HTMLInputElement>) => {
        const file = e.target.files?.[0];
        if (!file || !supabase) return;

        setUploadingImage(true);
        try {
            // 1. Convert to WebP
            const webpBlob = await convertToWebP(file);

            // 2. Prepare filename (seo friendly)
            const filename = `${Date.now()}-${file.name.split('.')[0].replace(/[^a-z0-9]/gi, '-').toLowerCase()}.webp`;
            const filePath = `blog/${filename}`; // Adjust folder as needed

            // 3. Upload to Supabase
            const { data, error } = await supabase.storage
                .from('images') // Ensure this bucket exists
                .upload(filePath, webpBlob, {
                    contentType: 'image/webp',
                    upsert: false
                });

            if (error) throw error;

            // 4. Get Public URL
            const { data: { publicUrl } } = supabase.storage
                .from('images')
                .getPublicUrl(filePath);

            setEditingPost(prev => ({ ...prev, cover_url: publicUrl }));
        } catch (err) {
            console.error(err);
            alert('Erreur lors de l\'upload de l\'image. Vérifiez que le bucket "images" existe et est public.');
        } finally {
            setUploadingImage(false);
        }
    };

    // --- AI Generation ---

    const generateContent = async () => {
        if (!editingPost?.title) return alert('Veuillez d\'abord entrer un titre');
        if (!openRouterKey) return alert('Veuillez entrer une clé API OpenRouter');

        setIsGenerating(true);
        try {
            const response = await fetch('https://openrouter.ai/api/v1/chat/completions', {
                method: 'POST',
                headers: {
                    'Authorization': `Bearer ${openRouterKey}`,
                    'Content-Type': 'application/json',
                    'HTTP-Referer': window.location.origin,
                },
                body: JSON.stringify({
                    model: 'mistralai/mistral-7b-instruct:free', // Free model example, user can change logic
                    messages: [
                        {
                            role: 'system',
                            content: `Tu es un expert en SEO et un avocat spécialisé en dommage corporel. Rédige un article de blog complet, structuré (h2, h3, p) et optimisé pour le référencement sur le sujet donné.
              
              règles:
              1. Utilise le formatage HTML directement (pas de markdown).
              2. Ton : Professionnel, empathique, expert.
              3. Structure : Introduction accrocheuse, Corps de l'article détaillé, Conclusion avec appel à l'action.
              4. Mots-clés : dommage corporel, avocat, indemnisation, Bayonne, victime.
              5. Longueur : environ 800-1000 mots.
              6. Génère aussi un "seo_title" (max 60 caractères), une "seo_description" (max 160 caractères) et un "excerpt" (résumé court) et un "slug".
              
              Réponds UNIQUEMENT avec un objet JSON valide contenant les champs: content_html, seo_title, seo_description, excerpt, slug.`
                        },
                        {
                            role: 'user',
                            content: `Sujet de l'article : ${editingPost.title}`
                        }
                    ]
                })
            });

            const data = await response.json();

            // Try to parse the JSON content from the AI response
            let content = data.choices[0].message.content;
            // Clean up if the AI wrapped it in markdown blocks
            content = content.replace(/```json/g, '').replace(/```/g, '').trim();

            const parsed = JSON.parse(content);

            setEditingPost(prev => ({
                ...prev,
                content_html: parsed.content_html,
                seo_title: parsed.seo_title,
                seo_description: parsed.seo_description,
                excerpt: parsed.excerpt,
                slug: parsed.slug || prev?.slug
            }));

            // Save key for future use
            localStorage.setItem('openrouter_key', openRouterKey);

        } catch (err) {
            console.error(err);
            alert('Erreur lors de la génération. Vérifiez votre clé API ou le format de la réponse.');
        } finally {
            setIsGenerating(false);
        }
    };

    // --- CRUD Operations ---

    const handleSave = async () => {
        if (!supabase || !editingPost) return;

        try {
            const postData = {
                ...editingPost,
                updated_at: new Date().toISOString(),
                author_id: editingPost.author_id || 'a0000000-0000-4000-8000-000000000001', // Default ID or current user
                lang: editingPost.lang || 'fr',
                status: editingPost.status || 'draft'
            };

            if (!postData.slug) {
                postData.slug = postData.title?.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)/g, '') || '';
            }

            let error;
            if (editingPost.id) {
                // Update
                const { error: err } = await supabase
                    .from('posts')
                    .update(postData)
                    .eq('id', editingPost.id);
                error = err;
            } else {
                // Create
                const { error: err } = await supabase
                    .from('posts')
                    .insert([postData]);
                error = err;
            }

            if (error) throw error;

            alert('Article sauvegardé !');
            setEditingPost(null);
            fetchPosts();
        } catch (err) {
            console.error(err);
            alert('Erreur lors de la sauvegarde: ' + (err as any).message);
        }
    };

    const handleDelete = async (id: string) => {
        if (!confirm('Êtes-vous sûr de vouloir supprimer cet article ?')) return;
        if (!supabase) return;

        const { error } = await supabase.from('posts').delete().eq('id', id);
        if (error) {
            alert('Erreur lors de la suppression');
        } else {
            fetchPosts();
        }
    };

    // --- Render ---

    if (!session) {
        return (
            <div className="min-h-screen bg-gray-50 flex items-center justify-center p-4">
                <form onSubmit={handleLogin} className="bg-white p-8 rounded-lg shadow-md max-w-sm w-full space-y-4">
                    <div className="flex justify-center mb-4">
                        <Lock className="w-12 h-12 text-or" />
                    </div>
                    <h1 className="text-2xl font-bold text-center text-noir font-playfair mb-6">Administration Blog</h1>

                    {authError && (
                        <div className="bg-red-50 text-red-600 p-3 rounded text-sm text-center">
                            {authError}
                        </div>
                    )}

                    <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">Email</label>
                        <input
                            type="email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            className="w-full px-4 py-2 border rounded-md focus:ring-2 focus:ring-or focus:border-or"
                            placeholder="admin@laurabaron.com"
                        />
                    </div>

                    <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">Mot de passe</label>
                        <input
                            type="password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            className="w-full px-4 py-2 border rounded-md focus:ring-2 focus:ring-or focus:border-or"
                            placeholder="••••••••"
                        />
                    </div>
                    <button type="submit" className="w-full bg-noir text-white py-2 rounded-md hover:bg-gray-800 transition-colors">
                        Accéder
                    </button>
                </form>
            </div>
        );
    }

    return (
        <div className="min-h-screen bg-gray-50 pb-20">
            {/* Header Admin */}
            <header className="bg-white shadow-sm border-b sticky top-0 z-10">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex justify-between items-center">
                    <h1 className="text-xl font-bold font-playfair text-noir flex items-center gap-2">
                        <Lock className="w-5 h-5 text-or" />
                        Admin Panel
                    </h1>
                    <div className="flex items-center gap-4">
                        <input
                            type="password"
                            placeholder="Clé OpenRouter (pour IA)"
                            value={openRouterKey}
                            onChange={(e) => setOpenRouterKey(e.target.value)}
                            className="text-xs border rounded px-2 py-1 w-48"
                        />
                        <button onClick={() => setEditingPost({})} className="bg-or text-white px-4 py-2 rounded-md flex items-center gap-2 text-sm hover:bg-yellow-600 transition-colors">
                            <Plus className="w-4 h-4" /> Nouvel Article
                        </button>
                        <button onClick={handleLogout} className="text-gray-500 hover:text-red-500 p-2" title="Déconnexion">
                            <Lock className="w-4 h-4" />
                        </button>
                    </div>
                </div>
            </header>

            {/* Tabs Navigation */}
            <div className="bg-white border-b">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="flex gap-8">
                        <button
                            onClick={() => setActiveTab('posts')}
                            className={`py-4 px-2 border-b-2 font-medium text-sm transition-colors ${activeTab === 'posts'
                                ? 'border-or text-or'
                                : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
                                }`}
                        >
                            <div className="flex items-center gap-2">
                                <Edit className="w-4 h-4" />
                                Articles ({posts.length})
                            </div>
                        </button>
                        <button
                            onClick={() => setActiveTab('leads')}
                            className={`py-4 px-2 border-b-2 font-medium text-sm transition-colors ${activeTab === 'leads'
                                ? 'border-or text-or'
                                : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
                                }`}
                        >
                            <div className="flex items-center gap-2">
                                <Users className="w-4 h-4" />
                                Demandes de contact ({leads.length})
                            </div>
                        </button>
                    </div>
                </div>
            </div>

            <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">

                {activeTab === 'leads' ? (
                    /* --- LEADS VIEW --- */
                    <div className="space-y-6">
                        {loadingLeads ? (
                            <div className="text-center py-20">
                                <Loader2 className="w-10 h-10 animate-spin text-gray-300 mx-auto" />
                                <p className="text-gray-400 mt-2">Chargement des demandes...</p>
                            </div>
                        ) : leads.length === 0 ? (
                            <div className="text-center py-20 bg-white rounded-lg border border-dashed border-gray-300">
                                <div className="bg-gray-50 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                                    <Mail className="w-8 h-8 text-gray-400" />
                                </div>
                                <h3 className="text-lg font-medium text-gray-900">Aucune demande</h3>
                                <p className="text-gray-500">Les demandes de contact apparaîtront ici.</p>
                            </div>
                        ) : (
                            <div className="bg-white rounded-lg shadow overflow-hidden">
                                <div className="overflow-x-auto">
                                    <table className="min-w-full divide-y divide-gray-200">
                                        <thead className="bg-gray-50">
                                            <tr>
                                                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                                    Date
                                                </th>
                                                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                                    Prénom
                                                </th>
                                                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                                    Nom
                                                </th>
                                                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                                    Email
                                                </th>
                                                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                                    Téléphone
                                                </th>
                                                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                                    Message
                                                </th>
                                                <th className="px-6 py-3 text-center text-xs font-medium text-gray-500 uppercase tracking-wider">
                                                    Pièce jointe
                                                </th>
                                            </tr>
                                        </thead>
                                        <tbody className="bg-white divide-y divide-gray-200">
                                            {leads.map((lead) => (
                                                <tr
                                                    key={lead.id}
                                                    onClick={() => setSelectedLead(lead)}
                                                    className="hover:bg-gray-50 cursor-pointer transition-colors"
                                                >
                                                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                                                        <div className="flex items-center gap-2">
                                                            <Calendar className="w-4 h-4" />
                                                            {new Date(lead.created_at).toLocaleDateString('fr-FR', {
                                                                day: '2-digit',
                                                                month: '2-digit',
                                                                year: 'numeric',
                                                                hour: '2-digit',
                                                                minute: '2-digit'
                                                            })}
                                                        </div>
                                                    </td>
                                                    <td className="px-6 py-4 whitespace-nowrap">
                                                        <div className="text-sm font-medium text-gray-900">{lead.firstname}</div>
                                                    </td>
                                                    <td className="px-6 py-4 whitespace-nowrap">
                                                        <div className="text-sm font-medium text-gray-900">{lead.lastname}</div>
                                                    </td>
                                                    <td className="px-6 py-4 whitespace-nowrap">
                                                        <a href={`mailto:${lead.email}`} className="text-sm text-or hover:underline flex items-center gap-2">
                                                            <Mail className="w-4 h-4" />
                                                            {lead.email}
                                                        </a>
                                                    </td>
                                                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                                                        {lead.phone ? (
                                                            <a href={`tel:${lead.phone}`} className="flex items-center gap-2 hover:text-or">
                                                                <Phone className="w-4 h-4" />
                                                                {lead.phone}
                                                            </a>
                                                        ) : (
                                                            <span className="text-gray-400">-</span>
                                                        )}
                                                    </td>
                                                    <td className="px-6 py-4">
                                                        <div className="text-sm text-gray-900 max-w-md">
                                                            <div className="flex items-start gap-2">
                                                                <MessageSquare className="w-4 h-4 mt-0.5 flex-shrink-0" />
                                                                <p className="line-clamp-3">{lead.message}</p>
                                                            </div>
                                                        </div>
                                                    </td>
                                                    <td className="px-6 py-4 whitespace-nowrap text-center">
                                                        {lead.attachment_url ? (
                                                            <div title="Pièce jointe disponible">
                                                                <FileText className="w-5 h-5 text-indigo-600 mx-auto" />
                                                            </div>
                                                        ) : (
                                                            <span className="text-gray-300">-</span>
                                                        )}
                                                    </td>
                                                </tr>
                                            ))}
                                        </tbody>
                                    </table>
                                </div>
                            </div>
                        )}
                    </div>
                ) : editingPost ? (
                    /* --- EDITOR MODE --- */
                    <div className="bg-white rounded-xl shadow-lg p-6 animate-fade-in">
                        <div className="flex justify-between items-center mb-6">
                            <h2 className="text-2xl font-bold font-playfair">{editingPost.id ? 'Modifier l\'article' : 'Nouvel Article'}</h2>
                            <button onClick={() => setEditingPost(null)} className="text-gray-500 hover:text-red-500">
                                <X className="w-6 h-6" />
                            </button>
                        </div>

                        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                            {/* Main Content */}
                            <div className="lg:col-span-2 space-y-6">

                                {/* AI Generator Box */}
                                <div className="bg-blue-50 p-4 rounded-lg border border-blue-100 mb-6">
                                    <label className="block text-sm font-medium text-blue-800 mb-2 flex items-center gap-2">
                                        <Wand2 className="w-4 h-4" /> Générateur IA
                                    </label>
                                    <div className="flex gap-2">
                                        <input
                                            type="text"
                                            placeholder="Entrez le titre de l'article ici pour générer le contenu..."
                                            value={editingPost.title || ''}
                                            onChange={(e) => setEditingPost({ ...editingPost, title: e.target.value })}
                                            className="flex-1 px-4 py-2 border border-blue-200 rounded-md"
                                        />
                                        <button
                                            onClick={generateContent}
                                            disabled={isGenerating || !openRouterKey}
                                            className="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700 disabled:opacity-50 disabled:cursor-not-allowed flex items-center gap-2"
                                        >
                                            {isGenerating ? <Loader2 className="w-4 h-4 animate-spin" /> : 'Générer'}
                                        </button>
                                    </div>
                                    {!openRouterKey && <p className="text-xs text-red-500 mt-1">Clé OpenRouter requise (voir en haut à droite)</p>}
                                </div>

                                <div>
                                    <label className="block text-sm font-medium text-gray-700 mb-1">Titre</label>
                                    <input
                                        type="text"
                                        value={editingPost.title || ''}
                                        onChange={(e) => setEditingPost({ ...editingPost, title: e.target.value })}
                                        className="w-full px-4 py-2 border rounded-md"
                                    />
                                </div>

                                <div>
                                    <label className="block text-sm font-medium text-gray-700 mb-1">Slug (URL)</label>
                                    <input
                                        type="text"
                                        value={editingPost.slug || ''}
                                        onChange={(e) => setEditingPost({ ...editingPost, slug: e.target.value })}
                                        className="w-full px-4 py-2 border rounded-md font-mono text-sm bg-gray-50"
                                    />
                                </div>

                                <div>
                                    <label className="block text-sm font-medium text-gray-700 mb-1">Contenu (HTML)</label>
                                    <textarea
                                        value={editingPost.content_html || ''}
                                        onChange={(e) => setEditingPost({ ...editingPost, content_html: e.target.value })}
                                        rows={20}
                                        className="w-full px-4 py-2 border rounded-md font-mono text-sm"
                                        placeholder="<p>Votre contenu ici...</p>"
                                    />
                                </div>
                            </div>

                            {/* Sidebar Settings */}
                            <div className="space-y-6">

                                {/* Publish Status */}
                                <div className="bg-gray-50 p-4 rounded-lg">
                                    <label className="block text-sm font-medium text-gray-700 mb-2">Statut</label>
                                    <select
                                        value={editingPost.status || 'draft'}
                                        onChange={(e) => setEditingPost({ ...editingPost, status: e.target.value as 'draft' | 'published' })}
                                        className="w-full px-3 py-2 border rounded-md bg-white"
                                    >
                                        <option value="draft">Brouillon</option>
                                        <option value="published">Publié</option>
                                    </select>
                                </div>

                                {/* Cover Image */}
                                <div className="bg-gray-50 p-4 rounded-lg">
                                    <label className="block text-sm font-medium text-gray-700 mb-2">Image de couverture</label>

                                    {editingPost.cover_url && (
                                        <div className="mb-4 relative h-40 w-full rounded-md overflow-hidden bg-gray-200">
                                            <Image
                                                src={editingPost.cover_url}
                                                alt="Preview"
                                                fill
                                                style={{ objectFit: 'cover' }}
                                            />
                                        </div>
                                    )}

                                    <div className="border-2 border-dashed border-gray-300 rounded-md p-6 text-center hover:border-or transition-colors bg-white cursor-pointer relative">
                                        <input
                                            type="file"
                                            accept="image/*"
                                            onChange={handleImageUpload}
                                            className="absolute inset-0 w-full h-full opacity-0 cursor-pointer"
                                        />
                                        {uploadingImage ? (
                                            <Loader2 className="w-8 h-8 text-or mx-auto animate-spin" />
                                        ) : (
                                            <>
                                                <Upload className="w-8 h-8 text-gray-400 mx-auto mb-2" />
                                                <p className="text-xs text-gray-500">Glisser-déposer ou cliquer pour upload</p>
                                                <p className="text-[10px] text-gray-400 mt-1">Auto-conversion WebP</p>
                                            </>
                                        )}
                                    </div>
                                </div>

                                {/* SEO Settings */}
                                <div className="bg-gray-50 p-4 rounded-lg space-y-4">
                                    <h3 className="font-semibold text-sm text-gray-900 border-b pb-2">SEO</h3>

                                    <div>
                                        <label className="block text-xs font-medium text-gray-700 mb-1">Titre SEO</label>
                                        <input
                                            type="text"
                                            value={editingPost.seo_title || ''}
                                            onChange={(e) => setEditingPost({ ...editingPost, seo_title: e.target.value })}
                                            className="w-full px-3 py-2 border rounded-md text-sm"
                                        />
                                    </div>

                                    <div>
                                        <label className="block text-xs font-medium text-gray-700 mb-1">Meta Description</label>
                                        <textarea
                                            value={editingPost.seo_description || ''}
                                            onChange={(e) => setEditingPost({ ...editingPost, seo_description: e.target.value })}
                                            rows={3}
                                            className="w-full px-3 py-2 border rounded-md text-sm"
                                        />
                                    </div>
                                </div>

                                {/* Actions */}
                                <div className="flex flex-col gap-3 pt-4">
                                    <button
                                        onClick={handleSave}
                                        className="w-full bg-green-600 text-white py-3 rounded-md hover:bg-green-700 flex justify-center items-center gap-2 font-medium"
                                    >
                                        <Save className="w-4 h-4" /> Sauvegarder
                                    </button>
                                    {editingPost.id && ( // Only show delete for existing posts
                                        <button
                                            onClick={() => handleDelete(editingPost.id!)}
                                            className="w-full bg-red-100 text-red-600 py-3 rounded-md hover:bg-red-200 flex justify-center items-center gap-2 font-medium"
                                        >
                                            <Trash2 className="w-4 h-4" /> Supprimer
                                        </button>
                                    )}
                                </div>

                            </div>
                        </div>
                    </div>
                ) : (
                    /* --- LIST MODE --- */
                    <div className="space-y-6">
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                            {posts.map((post) => (
                                <div key={post.id} className="bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow p-4 border border-gray-100 flex flex-col">
                                    {post.cover_url && (
                                        <div className="h-40 w-full relative mb-4 rounded-md overflow-hidden bg-gray-100">
                                            <Image
                                                src={post.cover_url}
                                                alt={post.title}
                                                fill
                                                style={{ objectFit: 'cover' }}
                                            />
                                        </div>
                                    )}
                                    <h3 className="font-bold text-lg mb-2 line-clamp-2">{post.title}</h3>
                                    <p className="text-sm text-gray-500 mb-4 line-clamp-3">{post.excerpt}</p>

                                    <div className="mt-auto flex items-center justify-between pt-4 border-t">
                                        <span className={`text-xs px-2 py-1 rounded-full ${post.status === 'published' ? 'bg-green-100 text-green-700' : 'bg-gray-100 text-gray-700'}`}>
                                            {post.status === 'published' ? 'Publié' : 'Brouillon'}
                                        </span>
                                        <div className="flex gap-2">
                                            <button
                                                onClick={() => setEditingPost(post)}
                                                className="p-2 text-blue-600 hover:bg-blue-50 rounded-full"
                                                title="Modifier"
                                            >
                                                <Edit className="w-4 h-4" />
                                            </button>
                                            <button
                                                onClick={() => handleDelete(post.id)}
                                                className="p-2 text-red-600 hover:bg-red-50 rounded-full"
                                                title="Supprimer"
                                            >
                                                <Trash2 className="w-4 h-4" />
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>

                        {loading && (
                            <div className="text-center py-20">
                                <Loader2 className="w-10 h-10 animate-spin text-gray-300 mx-auto" />
                                <p className="text-gray-400 mt-2">Chargement des articles...</p>
                            </div>
                        )}

                        {!loading && posts.length === 0 && (
                            <div className="text-center py-20 bg-white rounded-lg border border-dashed border-gray-300">
                                <div className="bg-gray-50 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                                    <ImageIcon className="w-8 h-8 text-gray-400" />
                                </div>
                                <h3 className="text-lg font-medium text-gray-900">Aucun article</h3>
                                <p className="text-gray-500 mb-6">Commencez par créer votre premier article de blog.</p>
                                <button
                                    onClick={() => setEditingPost({})}
                                    className="bg-or text-white px-6 py-2 rounded-md hover:bg-yellow-600 transition-colors inline-flex items-center gap-2"
                                >
                                    <Plus className="w-4 h-4" /> Créer un article
                                </button>
                            </div>
                        )}
                    </div>
                )}
            </main>

            {/* Lead Detail Modal */}
            {selectedLead && (
                <div
                    className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50"
                    onClick={() => setSelectedLead(null)}
                >
                    <div
                        className="bg-white rounded-xl shadow-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto"
                        onClick={(e) => e.stopPropagation()}
                    >
                        {/* Header */}
                        <div className="bg-gradient-to-r from-or to-yellow-500 p-6 text-white relative">
                            <button
                                onClick={() => setSelectedLead(null)}
                                className="absolute top-4 right-4 text-white hover:bg-white hover:bg-opacity-20 rounded-full p-2 transition-colors"
                            >
                                <X className="w-5 h-5" />
                            </button>
                            <h2 className="text-2xl font-bold font-playfair mb-2">Demande de contact</h2>
                            <div className="flex items-center gap-2 text-white text-opacity-90">
                                <Calendar className="w-4 h-4" />
                                <span className="text-sm">
                                    {new Date(selectedLead.created_at).toLocaleDateString('fr-FR', {
                                        weekday: 'long',
                                        day: 'numeric',
                                        month: 'long',
                                        year: 'numeric',
                                        hour: '2-digit',
                                        minute: '2-digit'
                                    })}
                                </span>
                            </div>
                        </div>

                        {/* Content */}
                        <div className="p-6 space-y-6">
                            {/* Contact Info Cards */}
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                {/* Name Card */}
                                <div className="bg-blue-50 p-4 rounded-lg border border-blue-100">
                                    <div className="flex items-center gap-2 text-blue-700 mb-2">
                                        <Users className="w-5 h-5" />
                                        <span className="text-xs font-semibold uppercase tracking-wide">Identité</span>
                                    </div>
                                    <p className="text-lg font-semibold text-gray-900">{selectedLead.firstname} {selectedLead.lastname}</p>
                                </div>

                                {/* Email Card */}
                                <div className="bg-green-50 p-4 rounded-lg border border-green-100">
                                    <div className="flex items-center gap-2 text-green-700 mb-2">
                                        <Mail className="w-5 h-5" />
                                        <span className="text-xs font-semibold uppercase tracking-wide">Email</span>
                                    </div>
                                    <a
                                        href={`mailto:${selectedLead.email}`}
                                        className="text-lg font-semibold text-or hover:underline break-all"
                                    >
                                        {selectedLead.email}
                                    </a>
                                </div>

                                {/* Phone Card */}
                                {selectedLead.phone && (
                                    <div className="bg-purple-50 p-4 rounded-lg border border-purple-100 md:col-span-2">
                                        <div className="flex items-center gap-2 text-purple-700 mb-2">
                                            <Phone className="w-5 h-5" />
                                            <span className="text-xs font-semibold uppercase tracking-wide">Téléphone</span>
                                        </div>
                                        <a
                                            href={`tel:${selectedLead.phone}`}
                                            className="text-lg font-semibold text-or hover:underline"
                                        >
                                            {selectedLead.phone}
                                        </a>
                                    </div>
                                )}

                                {/* City Card */}
                                {selectedLead.city && (
                                    <div className="bg-orange-50 p-4 rounded-lg border border-orange-100">
                                        <div className="flex items-center gap-2 text-orange-700 mb-2">
                                            <MapPin className="w-5 h-5" />
                                            <span className="text-xs font-semibold uppercase tracking-wide">Ville</span>
                                        </div>
                                        <p className="text-lg font-semibold text-gray-900">{selectedLead.city}</p>
                                    </div>
                                )}

                                {/* Topic Card */}
                                {selectedLead.topic && (
                                    <div className="bg-pink-50 p-4 rounded-lg border border-pink-100 md:col-span-2">
                                        <div className="flex items-center gap-2 text-pink-700 mb-2">
                                            <MessageSquare className="w-5 h-5" />
                                            <span className="text-xs font-semibold uppercase tracking-wide">Sujet</span>
                                        </div>
                                        <p className="text-lg font-semibold text-gray-900">{selectedLead.topic}</p>
                                    </div>
                                )}
                            </div>

                            {/* Message Card */}
                            <div className="bg-gray-50 p-6 rounded-lg border border-gray-200">
                                <div className="flex items-center gap-2 text-gray-700 mb-3">
                                    <MessageSquare className="w-5 h-5" />
                                    <span className="text-sm font-semibold uppercase tracking-wide">Message</span>
                                </div>
                                <p className="text-gray-900 leading-relaxed whitespace-pre-wrap">{selectedLead.message}</p>
                            </div>

                            {/* Attachment Card */}
                            {selectedLead.attachment_url && (
                                <div className="bg-indigo-50 p-6 rounded-lg border border-indigo-200">
                                    <div className="flex items-center gap-2 text-indigo-700 mb-3">
                                        <FileText className="w-5 h-5" />
                                        <span className="text-sm font-semibold uppercase tracking-wide">Pièce jointe</span>
                                    </div>
                                    <a
                                        href={selectedLead.attachment_url}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="inline-flex items-center gap-2 text-indigo-600 hover:text-indigo-800 font-medium"
                                    >
                                        <Download className="w-4 h-4" />
                                        Télécharger le document
                                    </a>
                                </div>
                            )}

                            {/* Action Buttons */}
                            <div className="flex gap-3 pt-4 border-t">
                                <a
                                    href={`mailto:${selectedLead.email}?subject=Re: Votre demande de contact&body=Bonjour ${selectedLead.firstname} ${selectedLead.lastname},%0D%0A%0D%0A`}
                                    className="flex-1 bg-or text-white py-3 px-4 rounded-md hover:bg-yellow-600 transition-colors flex items-center justify-center gap-2 font-medium"
                                >
                                    <Mail className="w-4 h-4" />
                                    Répondre par email
                                </a>
                                {selectedLead.phone && (
                                    <a
                                        href={`tel:${selectedLead.phone}`}
                                        className="flex-1 bg-green-600 text-white py-3 px-4 rounded-md hover:bg-green-700 transition-colors flex items-center justify-center gap-2 font-medium"
                                    >
                                        <Phone className="w-4 h-4" />
                                        Appeler
                                    </a>
                                )}
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
}
