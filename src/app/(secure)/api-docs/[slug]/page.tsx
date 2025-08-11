import ApiDocsPage from "@/modules/api-docs"

interface ApiDocsPageProps {
  params: Promise<{
    slug: string
  }>
}

export default async function ApiDocsRoutePage({ params }: ApiDocsPageProps) {
  const { slug } = await params
  return <ApiDocsPage slug={slug} />
}
