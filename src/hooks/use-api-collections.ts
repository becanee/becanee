/**
 * Func: Hook untuk mengelola data koleksi API dengan pagination dari database
 * Created At: Senin, Januari 15th 2025, 10:30 am
 * Created By: becaneee.xyz
 * @returns Object berisi data API collections, pagination state, dan methods
 */

import { useState, useMemo, useEffect } from "react"
import { getAllCollections, getCollectionsWithPagination, searchCollections, getCollectionsByCategory, CollectionData } from "@/app/reqs/collections"

export interface ApiCollection {
  id: string
  name: string
  description: string
  category: string
  endpoint: string
  method: "GET" | "POST" | "PUT" | "DELETE" | "PATCH"
  status: "active" | "beta" | "deprecated"
  version: string
  documentation: string
  rateLimit: string
  tags: string[]
}

export function useApiCollections() {
  const [collections, setCollections] = useState<ApiCollection[]>([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)
  const [currentPage, setCurrentPage] = useState(1)
  const [itemsPerPage] = useState(10)
  const [searchQuery, setSearchQuery] = useState("")
  const [selectedCategory, setSelectedCategory] = useState<string>("all")
  const [totalCollections, setTotalCollections] = useState(0)

  // Mock data sebagai fallback
  const mockApiCollections: ApiCollection[] = [
    {
      id: "user-management-api",
      name: "User Management API",
      description: "Comprehensive API untuk mengelola data pengguna dengan fitur CRUD lengkap",
      category: "Authentication",
      endpoint: "/api/v1/users",
      method: "GET",
      status: "active",
      version: "v1.0",
      documentation: "/api-docs/user-management-api",
      rateLimit: "1000 requests/hour",
      tags: ["users", "authentication", "crud"]
    },
    {
      id: "product-catalog-api",
      name: "Product Catalog API",
      description: "API untuk mengelola katalog produk dengan fitur pencarian dan filter",
      category: "Data Management",
      endpoint: "/api/v1/products",
      method: "POST",
      status: "active",
      version: "v1.2",
      documentation: "/api-docs/product-catalog-api",
      rateLimit: "2000 requests/hour",
      tags: ["products", "catalog", "search"]
    }
  ]

  // Fetch data dari database dengan fallback
  const fetchCollections = async () => {
    try {
      setLoading(true)
      setError(null)
      
      let result
      if (searchQuery) {
        const searchResult = await searchCollections(searchQuery)
        result = {
          data: searchResult,
          total: searchResult.length,
          page: currentPage,
          limit: itemsPerPage
        }
      } else if (selectedCategory !== "all") {
        const categoryResult = await getCollectionsByCategory(selectedCategory)
        result = {
          data: categoryResult,
          total: categoryResult.length,
          page: currentPage,
          limit: itemsPerPage
        }
      } else {
        result = await getCollectionsWithPagination(currentPage, itemsPerPage)
      }

      // Transform CollectionData ke ApiCollection
      const transformedCollections: ApiCollection[] = result.data.map((item: CollectionData) => ({
        id: item.slug, // Use slug as id for consistent routing
        name: item.name,
        description: item.description,
        category: item.category,
        endpoint: item.endpoint,
        method: "GET" as const, // Default method
        status: item.status as "active" | "beta" | "deprecated",
        version: item.version,
        documentation: `/api-docs/${item.slug}`,
        rateLimit: item.rate_limit,
        tags: [item.category, "public-api"]
      }))

      setCollections(transformedCollections)
      setTotalCollections(result.total)
    } catch (err) {
      console.error('Error fetching collections:', err)
      
      // Fallback ke mock data jika ada error
      const filteredMockData = mockApiCollections.filter(api => {
        if (searchQuery) {
          return api.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
                 api.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
                 api.tags.some(tag => tag.toLowerCase().includes(searchQuery.toLowerCase()))
        }
        if (selectedCategory !== "all") {
          return api.category === selectedCategory
        }
        return true
      })

      const startIndex = (currentPage - 1) * itemsPerPage
      const endIndex = startIndex + itemsPerPage
      const paginatedMockData = filteredMockData.slice(startIndex, endIndex)

      setCollections(paginatedMockData)
      setTotalCollections(filteredMockData.length)
      setError(null) // Clear error karena fallback berhasil
    } finally {
      setLoading(false)
    }
  }

  // Fetch data ketika dependencies berubah
  useEffect(() => {
    fetchCollections()
  }, [currentPage, searchQuery, selectedCategory])

  // Pagination logic
  const totalPages = Math.ceil(totalCollections / itemsPerPage)

  const goToPage = (page: number) => {
    setCurrentPage(Math.max(1, Math.min(page, totalPages)))
  }

  const nextPage = () => {
    if (currentPage < totalPages) {
      setCurrentPage(currentPage + 1)
    }
  }

  const prevPage = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1)
    }
  }

  // Get unique categories for filter
  const categories = useMemo(() => {
    const uniqueCategories = [...new Set(mockApiCollections.map(api => api.category))]
    return ["all", ...uniqueCategories]
  }, [])

  return {
    // Data
    collections,
    totalCollections,
    loading,
    error,
    
    // Pagination
    currentPage,
    totalPages,
    itemsPerPage,
    
    // Filters
    searchQuery,
    setSearchQuery,
    selectedCategory,
    setSelectedCategory,
    categories,
    
    // Methods
    goToPage,
    nextPage,
    prevPage,
    
    // Loading state
    isLoading: loading
  }
}
