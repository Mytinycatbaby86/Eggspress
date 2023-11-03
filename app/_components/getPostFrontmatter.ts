import fs from 'fs'
import { serialize } from 'next-mdx-remote/serialize'
import { PostItem } from '@/types/Blog'


const extractFrontmatter = async (markdownData: {content: string, slug: string}[]) => {
  const frontmatterData = await Promise.all(
    markdownData.map( async ( data ) => {
      let serializedData: any = await serialize(data.content, {parseFrontmatter: true})
      serializedData.frontmatter.slug = data.slug
      return serializedData.frontmatter as PostItem
    })
  )
  
  return frontmatterData
}

const getPostFrontmatter = async (): Promise<PostItem[]> => {
  const dir = './posts/'
  const files = fs.readdirSync(dir)
  const allowedExtensions = ['.md', '.mdx']
  const markdownFiles = files.filter((file) => allowedExtensions.includes(file.substring(file.lastIndexOf('.'))))
  
  const data = markdownFiles.map((file) => {
    const content = fs.readFileSync(`posts/${file}`, 'utf8')
    return {
      content: content, 
      slug: file.slice(file.lastIndexOf('/') + 1, file.lastIndexOf('.'))
    }
  })
  
  return await extractFrontmatter(data)
}

export default getPostFrontmatter