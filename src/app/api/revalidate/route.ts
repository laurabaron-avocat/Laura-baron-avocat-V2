import { NextRequest, NextResponse } from 'next/server';
import { revalidatePath } from 'next/cache';

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();

    console.log('🔄 Revalidation triggered by Supabase webhook:', body);

    // Vérifier que c'est bien un changement sur la table posts
    if (body.table === 'posts') {
      console.log('📝 Revalidating posts data...');

      // Revalider la page ressources
      revalidatePath('/ressources');

      // Si c'est un article spécifique, revalider aussi sa page
      if (body.record?.slug) {
        revalidatePath(`/ressources/${body.record.slug}`);
        console.log(`📄 Revalidated article: /ressources/${body.record.slug}`);
      }

      console.log('✅ Revalidation completed successfully');

      return NextResponse.json({
        success: true,
        message: 'Page revalidated successfully',
        revalidated: ['/ressources'],
        timestamp: new Date().toISOString()
      });
    }

    return NextResponse.json({
      success: false,
      message: 'No revalidation needed - not a posts table change'
    });

  } catch (error) {
    console.error('❌ Error in revalidation webhook:', error);

    return NextResponse.json({
      success: false,
      message: 'Revalidation failed',
      error: error instanceof Error ? error.message : 'Unknown error'
    }, { status: 500 });
  }
}