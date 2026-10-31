import { supabase, type Product } from '@/lib/supabase'

export async function getErinShopProducts(): Promise<Product[]> {
    const { data, error } = await supabase.from('products').select('*').order('created_at', { ascending: false })
    if (error) {
        console.error('Could not load Alexandrea Roach shop products:', error.message)
        return []
    }
    return (data || []).filter(product => product.file_url?.includes('/collections/'))
}

// Backwards-compatible alias for existing page imports.
export const getMetzShopProducts = getErinShopProducts

export function isSoldOut(product: Product) {
    return /\bSold out\./i.test(product.description || '')
}

export function shouldOptimizeImage(url: string | null) {
    if (!url) return true
    try {
        return new URL(url).hostname.endsWith('.supabase.co')
    } catch {
        return true
    }
}


