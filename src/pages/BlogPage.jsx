import { FiArrowUpRight } from 'react-icons/fi';
import { Link } from 'react-router-dom';
import { Card } from '../components/common/Card';
import { Container } from '../components/common/Container';
import { SectionHeading } from '../components/common/SectionHeading';
import { blogPosts } from '../data/blogPosts';

export function BlogPage() {
  return (
    <section className="py-20">
      <Container>
        <SectionHeading
          eyebrow="Blog"
          title="Ideas for building a sharper digital presence."
          description="Placeholder articles are ready for Stephanie to replace with original educational content."
        />
        <div className="mt-12 grid gap-6 lg:grid-cols-3">
          {blogPosts.map((post) => (
            <Card key={post.slug} className="overflow-hidden">
              <div className="aspect-[4/3]" style={{ background: post.image }} />
              <div className="p-6">
                <div className="flex flex-wrap gap-3 text-xs font-bold uppercase tracking-[0.16em] text-ink">
                  <span>{post.category}</span>
                  <span>{post.readTime}</span>
                </div>
                <p className="mt-3 text-sm text-muted">{new Date(post.date).toLocaleDateString('en', { month: 'long', day: 'numeric', year: 'numeric' })}</p>
                <h2 className="mt-3 font-display text-2xl font-bold text-ink">{post.title}</h2>
                <p className="mt-3 text-sm leading-7 text-muted">{post.summary}</p>
                <Link to={`/blog/${post.slug}`} className="mt-5 inline-flex items-center gap-2 text-sm font-bold text-deep">
                  Read More <FiArrowUpRight aria-hidden="true" />
                </Link>
              </div>
            </Card>
          ))}
        </div>
      </Container>
    </section>
  );
}
