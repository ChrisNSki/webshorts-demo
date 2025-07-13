import Link from 'next/link';

const blogPosts = [
  {
    id: 1,
    title: 'Getting Started with Next.js',
    excerpt: 'Learn the basics of Next.js and how to create your first application with the App Router.',
    date: '2024-01-15',
    author: 'John Doe',
    readTime: '5 min read',
  },
  {
    id: 2,
    title: 'Building Responsive UIs with Tailwind CSS',
    excerpt: 'Discover how to create beautiful, responsive user interfaces using Tailwind CSS utility classes.',
    date: '2024-01-10',
    author: 'Jane Smith',
    readTime: '8 min read',
  },
  {
    id: 3,
    title: 'Understanding Server-Side Rendering',
    excerpt: 'Deep dive into SSR and how it improves performance and SEO for your web applications.',
    date: '2024-01-05',
    author: 'Mike Johnson',
    readTime: '12 min read',
  },
  {
    id: 4,
    title: 'Optimizing Images in Next.js',
    excerpt: 'Learn how to use Next.js Image component for optimal performance and user experience.',
    date: '2024-01-01',
    author: 'Sarah Wilson',
    readTime: '6 min read',
  },
];

export default function Blog() {
  return (
    <div className='min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]'>
      <main className='max-w-4xl mx-auto'>
        <h1 className='text-4xl font-bold mb-6'>Blog</h1>
        <p className='text-lg text-gray-600 dark:text-gray-300 mb-8'>Latest insights and tutorials about web development, Next.js, and modern web technologies.</p>

        <div className='grid gap-6'>
          {blogPosts.map((post) => (
            <article key={post.id} className='bg-white dark:bg-gray-800 rounded-lg shadow-lg p-6 hover:shadow-xl transition-shadow duration-200'>
              <div className='flex justify-between items-start mb-4'>
                <h2 className='text-xl font-semibold mb-2 hover:text-blue-600 dark:hover:text-blue-400'>
                  <Link href={`/blog/${post.id}`}>{post.title}</Link>
                </h2>
                <span className='text-sm text-gray-500 dark:text-gray-400'>{post.readTime}</span>
              </div>

              <p className='text-gray-600 dark:text-gray-300 mb-4'>{post.excerpt}</p>

              <div className='flex justify-between items-center text-sm text-gray-500 dark:text-gray-400'>
                <span>By {post.author}</span>
                <span>{new Date(post.date).toLocaleDateString()}</span>
              </div>
            </article>
          ))}
        </div>

        <div className='mt-8 text-center'>
          <button className='bg-blue-600 hover:bg-blue-700 text-white font-medium py-2 px-6 rounded-md transition-colors duration-200'>Load More Posts</button>
        </div>
      </main>
    </div>
  );
}
