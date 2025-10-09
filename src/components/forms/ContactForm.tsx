'use client';

import { useState } from 'react';
import { Upload, Send, X } from 'lucide-react';
import { submitContactForm } from '@/lib/queries';

interface FormData {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  subject: string;
  message: string;
  consent: boolean;
}

export default function ContactForm() {
  const [formData, setFormData] = useState<FormData>({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    subject: '',
    message: '',
    consent: false,
  });
  
  const [files, setFiles] = useState<File[]>([]);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value, type } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? (e.target as HTMLInputElement).checked : value
    }));
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files) {
      const newFiles = Array.from(e.target.files);
      setFiles(prev => [...prev, ...newFiles]);
    }
  };

  const removeFile = (index: number) => {
    setFiles(prev => prev.filter((_, i) => i !== index));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    try {
      await submitContactForm({
        firstName: formData.firstName,
        lastName: formData.lastName,
        email: formData.email,
        phone: formData.phone,
        topic: formData.subject,
        message: formData.message,
      });
      
      setSubmitStatus('success');
      setFormData({
        firstName: '',
        lastName: '',
        email: '',
        phone: '',
        subject: '',
        message: '',
        consent: false,
      });
      setFiles([]);
    } catch (error) {
      console.error('Error submitting form:', error);
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  if (submitStatus === 'success') {
    return (
      <div className="bg-green-50 border border-green-200 rounded-lg p-6 text-center">
        <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
          <Send className="w-6 h-6 text-green-600" />
        </div>
        <h3 className="text-lg font-semibold text-green-900 mb-2">Message envoyé</h3>
        <p className="text-green-700">
          Votre demande a été transmise avec succès. Nous vous recontacterons dans les plus brefs délais.
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-4 md:space-y-6">
      {/* Personal Info */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-3 md:gap-4">
        <div>
          <label htmlFor="firstName" className="block text-xs md:text-sm font-medium text-gray-700 mb-1 md:mb-2">
            Prénom *
          </label>
          <input
            type="text"
            id="firstName"
            name="firstName"
            required
            value={formData.firstName}
            onChange={handleInputChange}
            className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-transparent text-sm md:text-base"
          />
        </div>
        <div>
          <label htmlFor="lastName" className="block text-xs md:text-sm font-medium text-gray-700 mb-1 md:mb-2">
            Nom *
          </label>
          <input
            type="text"
            id="lastName"
            name="lastName"
            required
            value={formData.lastName}
            onChange={handleInputChange}
            className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-transparent text-sm md:text-base"
          />
        </div>
      </div>

      {/* Contact Info */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-3 md:gap-4">
        <div>
          <label htmlFor="email" className="block text-xs md:text-sm font-medium text-gray-700 mb-1 md:mb-2">
            Email *
          </label>
          <input
            type="email"
            id="email"
            name="email"
            required
            value={formData.email}
            onChange={handleInputChange}
            className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-transparent text-sm md:text-base"
          />
        </div>
        <div>
          <label htmlFor="phone" className="block text-xs md:text-sm font-medium text-gray-700 mb-1 md:mb-2">
            Téléphone
          </label>
          <input
            type="tel"
            id="phone"
            name="phone"
            value={formData.phone}
            onChange={handleInputChange}
            className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-transparent text-sm md:text-base"
          />
        </div>
      </div>

      {/* Subject */}
      <div>
        <label htmlFor="subject" className="block text-xs md:text-sm font-medium text-gray-700 mb-1 md:mb-2">
          Motif de votre demande *
        </label>
        <select
          id="subject"
          name="subject"
          required
          value={formData.subject}
          onChange={handleInputChange}
          className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-transparent text-sm md:text-base"
        >
          <option value="">Sélectionnez un motif</option>
          <option value="accident-route">Accident de la route</option>
          <option value="accident-medical">Accident médical</option>
          <option value="agression">Agression</option>
          <option value="accident-vie">Accident de la vie</option>
          <option value="autre">Autre</option>
        </select>
      </div>

      {/* Message */}
      <div>
        <label htmlFor="message" className="block text-xs md:text-sm font-medium text-gray-700 mb-1 md:mb-2">
          Votre message *
        </label>
        <textarea
          id="message"
          name="message"
          required
          rows={4}
          value={formData.message}
          onChange={handleInputChange}
          className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-transparent text-sm md:text-base"
          placeholder="Décrivez brièvement votre situation..."
        />
      </div>

      {/* File Upload */}
      <div>
        <label className="block text-xs md:text-sm font-medium text-gray-700 mb-1 md:mb-2">
          Pièces jointes (optionnel)
        </label>
        <div className="border-2 border-dashed border-gray-300 rounded-lg p-3 md:p-4">
          <input
            type="file"
            multiple
            accept=".pdf,.jpg,.jpeg,.png"
            onChange={handleFileChange}
            className="hidden"
            id="file-upload"
          />
          <label
            htmlFor="file-upload"
            className="flex flex-col items-center cursor-pointer"
          >
            <Upload className="w-6 h-6 md:w-8 md:h-8 text-gray-400 mb-2" />
            <span className="text-xs md:text-sm text-gray-600 text-center">
              Cliquez pour ajouter des fichiers (PDF, JPG, PNG)
            </span>
          </label>
        </div>
        
        {files.length > 0 && (
          <div className="mt-2 space-y-1 md:space-y-2">
            {files.map((file, index) => (
              <div key={index} className="flex items-center justify-between bg-gray-50 p-2 rounded text-xs md:text-sm">
                <span className="text-gray-700 truncate mr-2">{file.name}</span>
                <button
                  type="button"
                  onClick={() => removeFile(index)}
                  className="text-red-500 hover:text-red-700 flex-shrink-0"
                >
                  <X className="w-3 h-3 md:w-4 md:h-4" />
                </button>
              </div>
            ))}
          </div>
        )}
      </div>

      {/* Consent */}
      <div className="flex items-start space-x-2 md:space-x-3">
        <input
          type="checkbox"
          id="consent"
          name="consent"
          required
          checked={formData.consent}
          onChange={handleInputChange}
          className="mt-1 h-3 w-3 md:h-4 md:w-4 text-amber-600 focus:ring-amber-500 border-gray-300 rounded flex-shrink-0"
        />
        <label htmlFor="consent" className="text-xs md:text-sm text-gray-700 leading-relaxed">
          J'accepte que mes données personnelles soient traitées conformément à la{' '}
          <a href="/politique-confidentialite" className="text-amber-600 hover:underline">
            politique de confidentialité
          </a>{' '}
          du cabinet. *
        </label>
      </div>

      {/* Submit Button */}
      <button
        type="submit"
        disabled={isSubmitting}
        className="w-full bg-amber-600 text-white py-3 px-4 md:px-6 rounded-lg hover:bg-amber-700 disabled:opacity-50 disabled:cursor-not-allowed transition-colors flex items-center justify-center space-x-2 text-sm md:text-base font-medium"
      >
        {isSubmitting ? (
          <div className="animate-spin rounded-full h-4 w-4 md:h-5 md:w-5 border-b-2 border-white" />
        ) : (
          <>
            <Send className="w-4 h-4 md:w-5 md:h-5" />
            <span>Envoyer ma demande</span>
          </>
        )}
      </button>

      {submitStatus === 'error' && (
        <div className="bg-red-50 border border-red-200 rounded-lg p-3 md:p-4 text-red-700 text-sm">
          Une erreur est survenue lors de l'envoi. Veuillez réessayer.
        </div>
      )}
    </form>
  );
}