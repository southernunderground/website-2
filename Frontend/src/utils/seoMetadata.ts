// src/utils/seoMetadata.ts

export interface Service {
  id: string;
  name: string;
  icon: string;
  image: string;
  shortDescription: string;
  detailedDescription: string;
  overview?: string;
  subServices?: string[];
  applications?: string[];
  gallery?: string[];
  relatedServices?: string[];

  features: string[];
  process: string[];
  locationTags?: string[];
  // features: string[];
  // process: string[];
  // locationTags?: string[];
}

export interface ServiceWithMeta extends Service {
  slug: string;
  metaTitle: string;
  metaDescription: string;
  structuredData: Record<string, unknown>;
}

function slugify(text: string): string {
  return text
    .toLowerCase()
    .trim()
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/^-+|-+$/g, '');
}

export function addServiceMetadata(
  services: Service[],
  defaultLocation = 'Louisiana'
): ServiceWithMeta[] {
  return services.map((service) => {
    const location = service.locationTags?.[0] ?? defaultLocation;

    const slug = slugify(`${service.name} ${location}`);

    const baseTitle = `${service.name} in ${location} | Southern Underground`;
    const metaTitle =
      baseTitle.length > 60 ? `${baseTitle.slice(0, 57)}...` : baseTitle;

    const rawDescription =
      service.detailedDescription || service.shortDescription;
    const metaDescription =
      rawDescription.length > 160
        ? `${rawDescription.slice(0, 157)}...`
        : rawDescription;

    const structuredData = {
      '@context': 'https://schema.org',
      '@type': 'Service',
      name: service.name,
      description: service.shortDescription,
      areaServed: location,
      provider: {
        '@type': 'Organization',
        name: 'Southern Underground'
      }
    } as const;

    return { ...service, slug, metaTitle, metaDescription, structuredData };
  });
}
