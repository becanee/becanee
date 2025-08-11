"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { IconCopy, IconCheck } from "@tabler/icons-react"
import { Terminal, AnimatedSpan } from "@/components/magicui/terminal"

interface CodeBlockProps {
  language: string
  code: string
  title?: string
}

export function CodeBlock({ language, code, title }: CodeBlockProps) {
  const [copied, setCopied] = useState(false)

  // Debug: Log code content
  console.log(`CodeBlock ${language}:`, code)

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(code)
      setCopied(true)
      setTimeout(() => setCopied(false), 2000)
    } catch (err) {
      console.error('Failed to copy code:', err)
    }
  }

  const getLanguageColor = (lang: string) => {
    switch (lang.toLowerCase()) {
      case 'javascript':
        return 'bg-yellow-100 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-300'
      case 'golang':
        return 'bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-300'
      case 'python':
        return 'bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-300'
      case 'php':
        return 'bg-purple-100 text-purple-800 dark:bg-purple-900 dark:text-purple-300'
      default:
        return 'bg-gray-100 text-gray-800 dark:bg-gray-900 dark:text-gray-300'
    }
  }

    return (
    <div className="group relative p-3 sm:p-4 shadow-sm hover:shadow-md transition-shadow">
      <div className="flex items-center justify-between mb-3 sm:mb-4">
        <div className="flex items-center gap-2 sm:gap-3">
          {title && (
            <h3 className="text-base sm:text-lg font-semibold text-foreground">{""}</h3>
          )}
          <Badge variant="secondary" className={`text-xs sm:text-sm ${getLanguageColor(language)}`}>
            {language}
          </Badge>
        </div>
        <Button
          variant="ghost"
          size="sm"
          onClick={handleCopy}
          className="opacity-100 sm:opacity-0 group-hover:opacity-100 transition-opacity hover:bg-muted"
        >
          {copied ? (
            <IconCheck className="h-4 w-4 text-green-600" />
          ) : (
            <IconCopy className="h-4 w-4" />
          )}
        </Button>
      </div>
      <Terminal className="w-full min-h-[8rem] min-w-fit sm:min-h-[10rem] overflow-x-auto bg-background border border-border rounded-md" sequence={false}>
        <div className="text-foreground font-mono text-xs sm:text-sm whitespace-pre-wrap p-3 sm:p-4 rounded-md my-2 sm:my-3 overflow-x-auto">
          {code || 'No code available'}
        </div>
      </Terminal>
    </div>
  )
}
