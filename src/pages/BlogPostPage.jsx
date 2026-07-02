import { Link, useParams } from 'react-router-dom';
import { Container } from '../components/common/Container';
import { blogPosts } from '../data/blogPosts';

export function BlogPostPage() {
  const { slug } = useParams();
  const post = blogPosts.find((item) => item.slug === slug);

  if (!post) {
    return (
      <Container className="py-24">
        <h1 className="font-display text-4xl font-bold text-ink">Article not found</h1>
        <Link className="mt-6 inline-flex font-bold text-ink" to="/blog">Back to blog</Link>
      </Container>
    );
  }

  return (
    <article className="py-20">
      <Container className="max-w-4xl">
        <p className="text-sm font-bold uppercase tracking-[0.2em] text-ink">{post.category}</p>
        <h1 className="mt-4 font-display text-4xl font-bold leading-tight text-ink sm:text-5xl">{post.title}</h1>
        <p className="mt-5 text-muted">{post.readTime}</p>
        <div className="mt-10 aspect-[16/9] rounded-[2rem]" style={{ background: post.image }} />
        <div className="prose prose-lg mt-10 max-w-none text-muted">
          <p>{post.summary}</p>
          <p>This is a placeholder article template. Replace this content with your full post when your editorial calendar is ready.</p>
        </div>
      </Container>
    </article>
  );
}
