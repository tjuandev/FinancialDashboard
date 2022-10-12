import { useEffect, useState } from 'react'

type DocumentTypeState = Document | null

type UseDocumentType = () => DocumentTypeState

const useDocumentReference: UseDocumentType = () => {
  const [document, setDocument] = useState<DocumentTypeState>(null)

  useEffect(() => {
    setDocument(window.document)
  }, [])

  return document
}

export default useDocumentReference
