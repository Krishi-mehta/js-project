import React, { useState } from 'react';
import Header from "../header/Header";
import Footer from "../footer/Footer";
import './blogs.css';

const BlogPage = () => {
  // Sample blog data - now with 9 mental health articles
  const [blogPosts, setBlogPosts] = useState([
    {
      id: 1,
      title: "Understanding Anxiety Disorders",
      author: "Dr. Sarah Johnson",
      date: "May 15, 2023",
      excerpt: "Anxiety disorders are the most common mental health concern in the United States. Learn about the different types and how to recognize symptoms.",
      content: "Anxiety disorders are a group of mental health conditions characterized by excessive fear, anxiety, or worry that interfere with daily activities. They include generalized anxiety disorder, panic disorder, social anxiety disorder, and specific phobias. Treatment typically involves psychotherapy, medication, or a combination of both. Cognitive-behavioral therapy (CBT) has been particularly effective in treating anxiety disorders.",
      image: "https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
      category: "Anxiety"
    },
    {
      id: 2,
      title: "The Importance of Self-Care for Mental Health",
      author: "Michael Chen",
      date: "April 28, 2023",
      excerpt: "Self-care isn't selfish - it's essential for maintaining good mental health. Discover practical self-care strategies you can implement today.",
      content: "Self-care involves taking deliberate action to preserve or improve one's own health, well-being, and happiness. Effective self-care practices include maintaining a regular sleep schedule, eating nutritious meals, exercising regularly, practicing mindfulness or meditation, setting healthy boundaries, and engaging in activities that bring joy. Remember that self-care looks different for everyone, so it's important to find what works best for you.",
      image: "https://images.unsplash.com/photo-1494172961521-33799ddd43a5?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80",      category: "Self-Care"
    },
    {
      id: 3,
      title: "Breaking the Stigma Around Depression",
      author: "Lisa Rodriguez",
      date: "April 10, 2023",
      excerpt: "Depression affects millions worldwide, yet stigma persists. Learn how we can change the conversation about this common condition.",
      content: "Depression is a serious mental health condition that affects how you feel, think, and handle daily activities. Despite its prevalence, many people with depression face stigma that prevents them from seeking help. We can combat stigma by educating ourselves and others, using person-first language (e.g., 'person with depression' rather than 'depressed person'), sharing personal stories responsibly, and treating mental health with the same importance as physical health.",
      image: "https://images.unsplash.com/photo-1506126613408-eca07ce68773?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
      category: "Depression"
    },
    // New blog posts added below
    {
      id: 4,
      title: "Mindfulness Meditation for Stress Reduction",
      author: "Dr. James Wilson",
      date: "June 5, 2023",
      excerpt: "How incorporating just 10 minutes of mindfulness meditation daily can significantly reduce stress levels.",
      content: "Mindfulness meditation has been shown in numerous studies to reduce cortisol levels (the stress hormone) by up to 30% with regular practice. The technique involves focusing on your breath while calmly acknowledging and accepting your feelings, thoughts, and bodily sensations. Start with just 5-10 minutes per day in a quiet space. Over time, you'll notice improved emotional regulation and decreased reactivity to stressful situations. Many apps like Headspace or Calm can guide beginners through the process.",
      image: "https://images.unsplash.com/photo-1545205597-3d9d02c29597?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
      category: "Mindfulness"
    },
    {
      id: 5,
      title: "The Gut-Brain Connection: How Nutrition Affects Mental Health",
      author: "Nutritionist Emily Park",
      date: "May 22, 2023",
      excerpt: "Emerging research reveals how your diet directly impacts anxiety, depression, and cognitive function.",
      content: "The gut microbiome produces about 90% of the body's serotonin, a neurotransmitter crucial for mood regulation. Foods that support mental health include:\n\n- Omega-3 rich foods (fatty fish, walnuts)\n- Fermented foods (yogurt, kimchi, sauerkraut)\n- Leafy greens (spinach, kale)\n- Whole grains and legumes\n\nConversely, highly processed foods, excess sugar, and artificial additives may exacerbate anxiety and depression symptoms. Making dietary changes alongside traditional treatments can provide comprehensive mental health support.",
      image: "https://images.unsplash.com/photo-1490645935967-10de6ba17061?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
      category: "Nutrition"
    },
    {
      id: 6,
      title: "Coping with PTSD: Effective Strategies for Healing",
      author: "Dr. Rachel Nguyen",
      date: "May 8, 2023",
      excerpt: "Evidence-based approaches to manage PTSD symptoms and reclaim your life.",
      content: "Post-Traumatic Stress Disorder (PTSD) affects about 8 million adults annually. Effective treatments include:\n\n1. Trauma-focused psychotherapy (EMDR or prolonged exposure therapy)\n2. Cognitive Processing Therapy\n3. Medication (SSRIs are commonly prescribed)\n4. Support groups with others who've experienced similar trauma\n5. Mindfulness and grounding techniques for flashbacks\n\nHealing isn't linear, but with proper support, many people experience significant symptom reduction within 3-6 months of consistent treatment.",
      image: "https://images.unsplash.com/photo-1516589178581-6cd7833ae3b2?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
      category: "Trauma"
    },
    {
      id: 7,
      title: "Building Healthy Relationships While Managing Mental Health",
      author: "Relationship Counselor Mark Taylor",
      date: "April 30, 2023",
      excerpt: "Maintaining strong connections when you're dealing with mental health challenges.",
      content: "Mental health conditions can strain relationships, but these strategies can help:\n\n- Practice open communication about your needs\n- Set realistic expectations with loved ones\n- Establish boundaries to protect your energy\n- Schedule 'check-ins' rather than waiting for crises\n- Remember that others' support has limits - professional help is crucial\n\nPartners and friends should educate themselves about your condition while respecting your autonomy. Couples or family therapy can be invaluable.",
      image: "https://images.unsplash.com/photo-1529333166437-7750a6dd5a70?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
      category: "Relationships"
    },
    {
      id: 8,
      title: "Sleep Hygiene: The Foundation of Mental Wellness",
      author: "Sleep Specialist Dr. Priya Kapoor",
      date: "April 18, 2023",
      excerpt: "Why quality sleep is non-negotiable for emotional regulation and cognitive function.",
      content: "Chronic sleep deprivation mimics and exacerbates mental health symptoms. For better sleep:\n\n1. Maintain consistent sleep/wake times\n2. Create a cool, dark, quiet bedroom environment\n3. Avoid screens 1 hour before bed\n4. Limit caffeine after 2pm\n5. Establish a relaxing pre-sleep routine\n\nIf insomnia persists beyond 3 weeks, consult a specialist. Sleep affects every aspect of mental health from decision-making to emotional resilience.",
      image: "https://images.unsplash.com/photo-1516589178581-6cd7833ae3b2?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80",      category: "Sleep"
    },
    {
      id: 9,
      title: "Recognizing Burnout Before It Becomes Depression",
      author: "Workplace Psychologist David Miller",
      date: "April 3, 2023",
      excerpt: "The subtle differences between burnout and clinical depression, and when to seek help.",
      content: "Burnout shares symptoms with depression but stems specifically from chronic workplace stress. Key differences:\n\n- Burnout: Energy depletion, cynicism about work, reduced professional efficacy\n- Depression: Pervasive sadness, loss of interest in all activities, feelings of worthlessness\n\nPrevent burnout by:\n- Setting work-life boundaries\n- Taking regular breaks\n- Practicing stress management techniques\n- Advocating for reasonable workloads\n\nIf symptoms persist after 2 weeks of vacation, consult a mental health professional as burnout can trigger clinical depression.",
      image: "https://images.unsplash.com/photo-1521791136064-7986c2920216?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
      category: "Burnout"
    }
  ]);

  const [selectedPost, setSelectedPost] = useState(null);
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All');

  const categories = ['All', 'Anxiety', 'Depression', 'Self-Care', 'Mindfulness', 
                     'Relationships', 'Nutrition', 'Trauma', 'Sleep', 'Burnout'];

  const filteredPosts = blogPosts.filter(post => {
    const matchesSearch = post.title.toLowerCase().includes(searchTerm.toLowerCase()) || 
                         post.content.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = selectedCategory === 'All' || post.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  const viewPost = (postId) => {
    const post = blogPosts.find(p => p.id === postId);
    setSelectedPost(post);
    window.scrollTo(0, 0);
  };

  const goBackToList = () => {
    setSelectedPost(null);
  };

  return (
    <div className="blog-container">
      <Header />
      
      {!selectedPost ? (
        <>
          <div className="blog-header">
            <h1>Mental Health Blog</h1>
            <p>Evidence-based articles and personal stories about mental health and wellness</p>
          </div>

          <div className="blog-controls">
            <div className="search-container">
              <input
                type="text"
                placeholder="Search articles..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
              <i className="search-icon">🔍</i>
            </div>

            <div className="category-filter">
              <label>Filter by category:</label>
              <select 
                value={selectedCategory} 
                onChange={(e) => setSelectedCategory(e.target.value)}
              >
                {categories.map(category => (
                  <option key={category} value={category}>{category}</option>
                ))}
              </select>
            </div>
          </div>

          <div className="blog-posts">
            {filteredPosts.length > 0 ? (
              filteredPosts.map(post => (
                <div key={post.id} className="blog-card">
                  <div className="blog-card-image">
                    <img src={post.image} alt={post.title} />
                  </div>
                  <div className="blog-card-content">
                    <span className="blog-category">{post.category}</span>
                    <h3>{post.title}</h3>
                    <p className="blog-meta">By {post.author} | {post.date}</p>
                    <p className="blog-excerpt">{post.excerpt}</p>
                    <button 
                      onClick={() => viewPost(post.id)}
                      className="read-more-btn"
                    >
                      Read More
                    </button>
                  </div>
                </div>
              ))
            ) : (
              <div className="no-results">
                <p>No articles found matching your criteria.</p>
              </div>
            )}
          </div>
        </>
      ) : (
        <div className="blog-post-detail">
          <button onClick={goBackToList} className="back-button">
            ← Back to All Articles
          </button>
          
          <div className="post-header">
            <span className="post-category">{selectedPost.category}</span>
            <h1>{selectedPost.title}</h1>
            <p className="post-meta">By {selectedPost.author} | {selectedPost.date}</p>
          </div>

          <div className="post-image">
            <img src={selectedPost.image} alt={selectedPost.title} />
          </div>

          <div className="post-content">
            {selectedPost.content.split('\n').map((paragraph, i) => (
              paragraph.trim() ? <p key={i}>{paragraph}</p> : <br key={i} />
            ))}
          </div>

          <div className="post-footer">
            <button onClick={goBackToList} className="back-button">
              ← Back to All Articles
            </button>
          </div>
        </div>
      )}

      <Footer />
    </div>
  );
};

export default BlogPage;