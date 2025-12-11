import { TemplateType } from '@/types/template'

/**
 * Switches the template by updating the URL parameter
 * @param template - The template type to switch to
 */
export function switchTemplateViaUrl(template: TemplateType) {
  const url = new URL(window.location.href)

  if (template && template !== 'default') {
    url.searchParams.set('template', template)
  } else {
    url.searchParams.delete('template')
  }

  // Navigate to the new URL
  window.location.href = url.toString()
}

/**
 * Gets the current template from URL parameter
 * @returns The template type from URL or null
 */
export function getCurrentTemplateFromUrl(): TemplateType | null {
  const urlParams = new URLSearchParams(window.location.search)
  const template = urlParams.get('template')

  if (template && ['default', 'anime', 'cat', 'anime2', 'kurumi'].includes(template)) {
    return template as TemplateType
  }

  return null
}

/**
 * Creates a URL with the specified template parameter
 * @param template - The template type
 * @param baseUrl - The base URL (optional, defaults to current URL)
 * @returns The URL with template parameter
 */
export function createTemplateUrl(template: TemplateType, baseUrl?: string): string {
  const url = new URL(baseUrl || window.location.href)

  if (template && template !== 'default') {
    url.searchParams.set('template', template)
  } else {
    url.searchParams.delete('template')
  }

  return url.toString()
}

/**
 * Available template options with their names
 */
export const templateOptions = {
  default: 'Modern Developer',
  anime: 'Anime Theme',
  cat: 'Neko Theme',
  anime2: 'Anime 2 Theme',
  kurumi: 'Kurumi Theme'
} as const

/**
 * Get all available template URLs
 * @param baseUrl - The base URL (optional)
 * @returns Object with template URLs
 */
export function getAllTemplateUrls(baseUrl?: string) {
  const urls: Record<TemplateType, string> = {
    default: createTemplateUrl('default', baseUrl),
    anime: createTemplateUrl('anime', baseUrl),
    cat: createTemplateUrl('cat', baseUrl),
    anime2: createTemplateUrl('anime2', baseUrl),
    kurumi: createTemplateUrl('kurumi', baseUrl)
  }

  return urls
}