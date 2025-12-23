import { useEffect, useState } from 'react';
import {
  getPosts,
  getPostById,
  createPost,
  updatePost,
  patchPost,
  deletePost,
  type Post,
} from '~/services/postService';

export default function PostsPage() {
  const [posts, setPosts] = useState<Post[]>([]);
  const [selectedPost, setSelectedPost] = useState<Post | null>(null);
  const [loading, setLoading] = useState(true);
  const [message, setMessage] = useState('');

  const [formData, setFormData] = useState({ userId: 1, title: '', body: '' });
  const [patchFields, setPatchFields] = useState({ title: false, body: false, userId: false });
  const [patchData, setPatchData] = useState({ title: '', body: '', userId: 1 });

  useEffect(() => {
    loadPosts();
  }, []);

  async function loadPosts() {
    setLoading(true);
    try {
      const data = await getPosts();
      setPosts(data.slice(0, 10)); // Limit to 10 for demo
    } catch (err) {
      setMessage('Error loading posts');
    } finally {
      setLoading(false);
    }
  }

  async function handleGetById(id: number) {
    try {
      const post = await getPostById(id);
      setSelectedPost(post);
      setMessage(`Fetched post #${id}`);
    } catch {
      setMessage('Error fetching post');
    }
  }

  async function handleCreate() {
    try {
      const newPost = await createPost(formData);
      setPosts([newPost, ...posts]);
      setFormData({ userId: 1, title: '', body: '' });
      setMessage(`Created post #${newPost.id}`);
    } catch {
      setMessage('Error creating post');
    }
  }

  async function handleUpdate(id: number) {
    try {
      const updated = await updatePost(id, formData);
      setPosts(posts.map((p) => (p.id === id ? updated : p)));
      setMessage(`Updated post #${id} (PUT)`);
    } catch {
      setMessage('Error updating post');
    }
  }

  async function handlePatch(id: number) {
    try {
      const patched = await patchPost(id, { title: formData.title });
      setPosts(posts.map((p) => (p.id === id ? { ...p, ...patched } : p)));
      setMessage(`Patched post #${id} title`);
    } catch {
      setMessage('Error patching post');
    }
  }

  function handleSelectForPatch(post: Post) {
    setSelectedPost(post);
    setPatchData({ title: post.title, body: post.body, userId: post.userId });
    setPatchFields({ title: false, body: false, userId: false });
    setMessage(`Selected post #${post.id} for patching - choose fields below`);
  }

  async function handlePatchSelected(id: number) {
    const payload: Record<string, string | number> = {};
    if (patchFields.title) payload.title = patchData.title;
    if (patchFields.body) payload.body = patchData.body;
    if (patchFields.userId) payload.userId = patchData.userId;

    try {
      const patched = await patchPost(id, payload);
      setPosts(posts.map((p) => (p.id === id ? { ...p, ...patched } : p)));
      setSelectedPost({ ...selectedPost!, ...patched });
      setMessage(`Patched post #${id} fields: ${Object.keys(payload).join(', ')}`);
    } catch {
      setMessage('Error patching post');
    }
  }

  async function handleDelete(id: number) {
    try {
      await deletePost(id);
      setPosts(posts.filter((p) => p.id !== id));
      setMessage(`Deleted post #${id}`);
    } catch {
      setMessage('Error deleting post');
    }
  }

  if (loading) return <p>Loading posts...</p>;

  return (
    <div style={{ padding: '1rem', maxWidth: '800px' }}>
      <h1>Posts CRUD</h1>
      {message && <p style={{ color: 'green', fontWeight: 'bold' }}>{message}</p>}

      <div style={{ marginBottom: '1rem', padding: '1rem', border: '1px solid #ccc' }}>
        <h3>Create / Update Post</h3>
        <input
          placeholder="Title"
          value={formData.title}
          onChange={(e) => setFormData({ ...formData, title: e.target.value })}
          style={{ display: 'block', width: '100%', marginBottom: '0.5rem', padding: '0.5rem' }}
        />
        <textarea
          placeholder="Body"
          value={formData.body}
          onChange={(e) => setFormData({ ...formData, body: e.target.value })}
          style={{ display: 'block', width: '100%', marginBottom: '0.5rem', padding: '0.5rem' }}
          rows={3}
        />
        <button onClick={handleCreate} style={{ marginRight: '0.5rem' }}>
          Create (POST)
        </button>
      </div>

      {selectedPost && (
        <div style={{ marginBottom: '1rem', padding: '1rem', background: '#f0f0f0' }}>
          <h3>Selected Post #{selectedPost.id}</h3>
          <p><strong>Title:</strong> {selectedPost.title}</p>
          <p><strong>Body:</strong> {selectedPost.body}</p>
          
          <h4>Patch Selected Fields</h4>
          <div style={{ display: 'flex', gap: '0.5rem', flexWrap: 'wrap' }}>
            <div>
              <label>
                <input
                  type="checkbox"
                  checked={patchFields.title}
                  onChange={(e) => setPatchFields({ ...patchFields, title: e.target.checked })}
                />{' '}
                Title
              </label>
              {patchFields.title && (
                <input
                  placeholder="New title"
                  value={patchData.title}
                  onChange={(e) => setPatchData({ ...patchData, title: e.target.value })}
                  style={{ display: 'block', marginTop: '0.25rem', padding: '0.25rem' }}
                />
              )}
            </div>
            <div>
              <label>
                <input
                  type="checkbox"
                  checked={patchFields.body}
                  onChange={(e) => setPatchFields({ ...patchFields, body: e.target.checked })}
                />{' '}
                Body
              </label>
              {patchFields.body && (
                <textarea
                  placeholder="New body"
                  value={patchData.body}
                  onChange={(e) => setPatchData({ ...patchData, body: e.target.value })}
                  style={{ display: 'block', marginTop: '0.25rem', padding: '0.25rem' }}
                  rows={2}
                />
              )}
            </div>
            <div>
              <label>
                <input
                  type="checkbox"
                  checked={patchFields.userId}
                  onChange={(e) => setPatchFields({ ...patchFields, userId: e.target.checked })}
                />{' '}
                User ID
              </label>
              {patchFields.userId && (
                <input
                  type="number"
                  placeholder="User ID"
                  value={patchData.userId}
                  onChange={(e) => setPatchData({ ...patchData, userId: Number(e.target.value) })}
                  style={{ display: 'block', marginTop: '0.25rem', padding: '0.25rem', width: '80px' }}
                />
              )}
            </div>
          </div>
          <button
            onClick={() => handlePatchSelected(selectedPost.id)}
            style={{ marginTop: '0.5rem' }}
            disabled={!patchFields.title && !patchFields.body && !patchFields.userId}
          >
            PATCH Selected Fields
          </button>
        </div>
      )}

      <h3>Posts List</h3>
      <ul style={{ listStyle: 'none', padding: 0 }}>
        {posts.map((post) => (
          <li key={post.id} style={{ marginBottom: '1rem', padding: '1rem', border: '1px solid #ddd' }}>
            <strong>#{post.id}</strong> - {post.title}
            <div style={{ marginTop: '0.5rem' }}>
              <button onClick={() => handleGetById(post.id)} style={{ marginRight: '0.25rem' }}>
                GET
              </button>
              <button onClick={() => handleUpdate(post.id)} style={{ marginRight: '0.25rem' }}>
                PUT
              </button>
              <button onClick={() => handleSelectForPatch(post)} style={{ marginRight: '0.25rem' }}>
                PATCH
              </button>
              <button onClick={() => handleDelete(post.id)} style={{ color: 'red' }}>
                DELETE
              </button>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}
