import Layout from '@/components/Layout'
import Link from 'next/link'
import React from 'react'

export default function products() {
  return (
    <Layout>
        <Link href={'/products/newproduct'} className=' text-white py-1 px-2 bg-blue-900 rounded-md'>Add New Product</Link>
    </Layout>
  )
}
