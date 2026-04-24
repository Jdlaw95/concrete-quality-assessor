import Link from "next/link";

const POSTS = [
  {
    slug: "sans-5863-explained",
    title: "Understanding SANS 5863: Concrete Cube Testing in South Africa",
    excerpt: "Why compressive strength testing matters, how the SANS standard works, and what your results actually mean for your structure. A clear guide for developers and contractors.",
    category: "Technical",
    date: "12 March 2025",
    img: "/core-samples.jpeg",
    readTime: "5 min read",
    featured: true,
  },
  {
    slug: "cape-town-marine-concrete",
    title: "Cape Town's Marine Environment: Why Coastal Concrete Needs Special Care",
    excerpt: "Chloride-induced corrosion is the leading cause of premature concrete failure on the Western Cape coast. What every developer and contractor needs to know before they pour.",
    category: "Western Cape",
    date: "28 February 2025",
    img: "https://images.unsplash.com/photo-1580674285054-bed31e145f59?auto=format&fit=crop&w=600&q=75",
    readTime: "7 min read",
    featured: false,
  },
  {
    slug: "cost-of-poor-concrete",
    title: "The True Cost of Skipping Concrete Quality Tests on Your Development",
    excerpt: "One failed cube test can halt a project for weeks. We break down the real financial and legal risk of underinvesting in concrete QC — and why it is never worth it.",
    category: "Business Case",
    date: "14 February 2025",
    img: "/core-drill.jpeg",
    readTime: "6 min read",
    featured: false,
  },
  {
    slug: "hot-weather-concreting",
    title: "Hot Weather Concreting in the Cape: Best Practices for Summer Builds",
    excerpt: "The Cape summer creates real challenges for concrete quality. Rapid moisture loss, accelerated set times and thermal cracking all require proactive management on site.",
    category: "Best Practice",
    date: "30 January 2025",
    img: "/pump-pour.jpeg",
    readTime: "5 min read",
    featured: false,
  },
  {
    slug: "nhbrc-and-concrete",
    title: "What NHBRC Registration Means for Your Concrete Standards",
    excerpt: "If you are building homes in South Africa, NHBRC enrolment is not optional. Here is what it requires from your concrete, and how to ensure you comply without surprises.",
    category: "Compliance",
    date: "16 January 2025",
    img: "/team-site.jpg",
    readTime: "4 min read",
    featured: false,
  },
  {
    slug: "reading-a-concrete-report",
    title: "How to Read a Concrete Test Report: A Developer's Guide",
    excerpt: "Test reports land on your desk full of MPa values, slump classes and SANS references. Here is a plain-English guide to understanding exactly what yours is telling you.",
    category: "Education",
    date: "5 January 2025",
    img: "/dcp-test.jpeg",
    readTime: "6 min read",
    featured: false,
  },
];

const CATEGORIES = ["All", "Technical", "Western Cape", "Business Case", "Best Practice", "Compliance", "Education"];

export default function BlogPage() {
  const [featured, ...rest] = POSTS;

  return (
    <div style={{ paddingTop: "5rem", minHeight: "100vh", background: "#0a0a0a" }}>
      {/* Header */}
      <section style={{ background: "#0f0f0f", padding: "5rem 0 4rem", borderBottom: "1px solid rgba(255,255,255,.06)" }}>
        <div className="container" style={{ textAlign: "center" }}>
          <p className="section-label" style={{ marginBottom: ".6rem" }}>KNOWLEDGE HUB</p>
          <h1 className="display-lg" style={{ marginBottom: "1rem" }}>
            The Concrete <span className="grad-amber">Quality Blog</span>
          </h1>
          <p className="body-lg" style={{ maxWidth: "520px", margin: "0 auto" }}>
            Technical guides, Western Cape construction insights, compliance tips and best practices — written by our assessors for South African builders and developers.
          </p>
        </div>
      </section>

      <div className="container" style={{ padding: "4rem 1.5rem" }}>
        {/* Category pills */}
        <div style={{ display: "flex", gap: ".5rem", flexWrap: "wrap", marginBottom: "3rem" }}>
          {CATEGORIES.map((cat) => (
            <span
              key={cat}
              style={{
                padding: ".35rem .9rem", borderRadius: "9999px",
                fontSize: ".8rem", fontWeight: 600, cursor: "pointer",
                border: cat === "All" ? "1px solid rgba(245,158,11,.4)" : "1px solid rgba(255,255,255,.1)",
                background: cat === "All" ? "rgba(245,158,11,.1)" : "transparent",
                color: cat === "All" ? "#f59e0b" : "#6b7280",
                transition: "all .2s ease",
              }}
            >
              {cat}
            </span>
          ))}
        </div>

        {/* Featured post */}
        <Link
          href={`/blog/${featured.slug}`}
          style={{ display: "grid", gridTemplateColumns: "1.4fr 1fr", gap: "0", textDecoration: "none",
            background: "#111111", border: "1px solid rgba(255,255,255,.07)", borderRadius: "1.25rem",
            overflow: "hidden", marginBottom: "3rem", transition: "all .3s ease",
          }}
          className="featured-post"
        >
          <div style={{ position: "relative", overflow: "hidden", minHeight: "360px" }}>
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={featured.img}
              alt={featured.title}
              style={{ width: "100%", height: "100%", objectFit: "cover", transition: "transform .5s ease", display: "block" }}
            />
            <div style={{
              position: "absolute", top: "1rem", left: "1rem",
              background: "rgba(245,158,11,.9)", color: "#0a0a0a",
              fontSize: ".68rem", fontWeight: 700, letterSpacing: ".05em",
              padding: ".2rem .65rem", borderRadius: "9999px",
            }}>
              FEATURED
            </div>
          </div>
          <div style={{ padding: "2.5rem 2rem", display: "flex", flexDirection: "column", justifyContent: "center" }}>
            <span style={{
              fontSize: ".72rem", fontWeight: 700, color: "#f59e0b",
              letterSpacing: ".08em", textTransform: "uppercase", marginBottom: ".75rem", display: "block",
            }}>
              {featured.category}
            </span>
            <h2 style={{ fontSize: "1.35rem", fontWeight: 800, color: "#f5f5f5", marginBottom: "1rem", lineHeight: 1.35 }}>{featured.title}</h2>
            <p style={{ fontSize: ".9rem", color: "#6b7280", lineHeight: 1.7, marginBottom: "1.5rem" }}>{featured.excerpt}</p>
            <div style={{ display: "flex", gap: "1.5rem", fontSize: ".78rem", color: "#4b5563" }}>
              <span>📅 {featured.date}</span>
              <span style={{ color: "#f59e0b" }}>⏱ {featured.readTime}</span>
            </div>
          </div>
        </Link>

        {/* Post grid */}
        <div style={{ display: "grid", gridTemplateColumns: "repeat(3,1fr)", gap: "1.5rem" }} className="blog-posts-grid">
          {rest.map((post) => (
            <Link key={post.slug} href={`/blog/${post.slug}`} className="blog-card" style={{ textDecoration: "none" }}>
              <div style={{ position: "relative", overflow: "hidden" }}>
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src={post.img} alt={post.title} loading="lazy"/>
                <div style={{
                  position: "absolute", top: ".75rem", left: ".75rem",
                  background: "rgba(245,158,11,.9)", color: "#0a0a0a",
                  fontSize: ".65rem", fontWeight: 700, letterSpacing: ".05em",
                  padding: ".18rem .55rem", borderRadius: "9999px",
                  textTransform: "uppercase",
                }}>
                  {post.category}
                </div>
              </div>
              <div style={{ padding: "1.25rem" }}>
                <h3 style={{ fontSize: ".95rem", fontWeight: 700, color: "#f5f5f5", marginBottom: ".6rem", lineHeight: 1.4 }}>{post.title}</h3>
                <p style={{ fontSize: ".82rem", color: "#6b7280", lineHeight: 1.65, marginBottom: "1rem" }}>{post.excerpt}</p>
                <div style={{ display: "flex", justifyContent: "space-between", fontSize: ".73rem", color: "#4b5563" }}>
                  <span>{post.date}</span>
                  <span style={{ color: "#f59e0b" }}>{post.readTime}</span>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>

      <style>{`
        .grad-amber{background:linear-gradient(135deg,#f59e0b,#fbbf24);-webkit-background-clip:text;-webkit-text-fill-color:transparent;background-clip:text;}
        @media(max-width:768px){.featured-post{grid-template-columns:1fr!important;} .featured-post>div:first-child{min-height:220px!important;}}
        @media(max-width:900px){.blog-posts-grid{grid-template-columns:repeat(2,1fr)!important;}}
        @media(max-width:560px){.blog-posts-grid{grid-template-columns:1fr!important;}}
      `}</style>
    </div>
  );
}
