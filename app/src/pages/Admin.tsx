import { useState, useRef } from "react";
import { trpc } from "@/providers/trpc";
import { motion, AnimatePresence } from "framer-motion";
import { Lock, X, Plus, Trash2, Edit2, Save, Upload } from "lucide-react";

const ADMIN_PASSWORD = "l@DyviDaAd";

interface ProductForm {
  id?: number;
  name: string;
  nameEn: string;
  description: string;
  descriptionEn: string;
  price: string;
  category: string;
  image: string;
  stock: string;
  featured: boolean;
}

const emptyForm: ProductForm = {
  name: "",
  nameEn: "",
  description: "",
  descriptionEn: "",
  price: "",
  category: "resin",
  image: "",
  stock: "10",
  featured: false,
};

export default function Admin() {
  const [password, setPassword] = useState("");
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [error, setError] = useState("");
  const [showForm, setShowForm] = useState(false);
  const [form, setForm] = useState<ProductForm>(emptyForm);
  const [editingId, setEditingId] = useState<number | null>(null);
  const fileInputRef = useRef<HTMLInputElement>(null);

  const utils = trpc.useUtils();
  const { data: products, isLoading } = trpc.product.list.useQuery();
  const createMutation = trpc.product.create.useMutation({
    onSuccess: () => {
      utils.product.list.invalidate();
      setShowForm(false);
      setForm(emptyForm);
    },
  });
  const updateMutation = trpc.product.update.useMutation({
    onSuccess: () => {
      utils.product.list.invalidate();
      setShowForm(false);
      setForm(emptyForm);
      setEditingId(null);
    },
  });
  const deleteMutation = trpc.product.delete.useMutation({
    onSuccess: () => utils.product.list.invalidate(),
  });

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    if (password === ADMIN_PASSWORD) {
      setIsAuthenticated(true);
      setError("");
    } else {
      setError("Mot de passe incorrect");
    }
  };

  const handleSave = () => {
    const data = {
      name: form.name,
      nameEn: form.nameEn || undefined,
      description: form.description || undefined,
      descriptionEn: form.descriptionEn || undefined,
      price: parseInt(form.price) || 0,
      category: form.category,
      image: form.image || "/images/product-1.jpg",
      stock: parseInt(form.stock) || 10,
      featured: form.featured ? 1 : 0,
    };

    if (editingId) {
      updateMutation.mutate({ id: editingId, ...data });
    } else {
      createMutation.mutate(data);
    }
  };

  const handleEdit = (product: NonNullable<typeof products>[0]) => {
    setForm({
      id: product.id,
      name: product.name,
      nameEn: product.nameEn || "",
      description: product.description || "",
      descriptionEn: product.descriptionEn || "",
      price: String(product.price),
      category: product.category,
      image: product.image,
      stock: String(product.stock),
      featured: product.featured === 1,
    });
    setEditingId(product.id);
    setShowForm(true);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const handleDelete = (id: number) => {
    if (confirm("Supprimer ce produit ?")) {
      deleteMutation.mutate({ id });
    }
  };

  const handleImageUpload = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;
    
    // Convert to base64 for demo
    const reader = new FileReader();
    reader.onloadend = () => {
      setForm((prev) => ({ ...prev, image: reader.result as string }));
    };
    reader.readAsDataURL(file);
  };

  if (!isAuthenticated) {
    return (
      <div className="min-h-screen bg-[#F7F7F7] dark:bg-[#111] flex items-center justify-center px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="w-full max-w-md bg-white dark:bg-[#0a0a0a] p-8 border border-gray-200 dark:border-gray-800"
        >
          <div className="flex items-center justify-center w-14 h-14 bg-[#111] dark:bg-white text-white dark:text-[#111] rounded-full mx-auto mb-6">
            <Lock size={24} />
          </div>
          <h1 className="font-['Space_Grotesk'] text-xl font-medium text-center text-[#111] dark:text-white mb-6">
            Admin Access
          </h1>
          <form onSubmit={handleLogin} className="space-y-4">
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Enter password"
              className="w-full px-4 py-3 bg-[#F7F7F7] dark:bg-[#1a1a1a] border border-gray-200 dark:border-gray-800 text-[#111] dark:text-white text-sm focus:outline-none focus:border-[#BFA45A]"
            />
            {error && (
              <motion.p
                initial={{ x: -10 }}
                animate={{ x: [10, -10, 10, 0] }}
                className="text-xs text-red-500"
              >
                {error}
              </motion.p>
            )}
            <button
              type="submit"
              className="w-full py-3 bg-[#111] dark:bg-white text-white dark:text-[#111] text-xs uppercase tracking-[0.12em] font-medium hover:bg-[#BFA45A] hover:text-white dark:hover:bg-[#BFA45A] dark:hover:text-white transition-colors"
            >
              Access
            </button>
          </form>
        </motion.div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-[#F7F7F7] dark:bg-[#111]">
      <div className="max-w-[1200px] mx-auto px-4 sm:px-6 py-8">
        <div className="flex items-center justify-between mb-8">
          <h1 className="font-['Space_Grotesk'] text-2xl font-medium text-[#111] dark:text-white">
            Product Management
          </h1>
          <button
            onClick={() => {
              setForm(emptyForm);
              setEditingId(null);
              setShowForm(!showForm);
            }}
            className="flex items-center gap-2 px-4 py-2 bg-[#111] dark:bg-white text-white dark:text-[#111] text-xs uppercase tracking-[0.1em] font-medium hover:bg-[#BFA45A] hover:text-white dark:hover:bg-[#BFA45A] transition-colors"
          >
            {showForm ? <X size={14} /> : <Plus size={14} />}
            {showForm ? "Close" : "Add Product"}
          </button>
        </div>

        {/* Product Form */}
        <AnimatePresence>
          {showForm && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              className="bg-white dark:bg-[#0a0a0a] p-6 border border-gray-200 dark:border-gray-800 mb-8 overflow-hidden"
            >
              <div className="grid sm:grid-cols-2 gap-4">
                <div>
                  <label className="text-xs uppercase tracking-[0.1em] text-[#555] dark:text-[#aaa]">Name (FR)</label>
                  <input
                    value={form.name}
                    onChange={(e) => setForm({ ...form, name: e.target.value })}
                    className="w-full mt-1 px-3 py-2 bg-[#F7F7F7] dark:bg-[#1a1a1a] border border-gray-200 dark:border-gray-700 text-sm text-[#111] dark:text-white focus:outline-none focus:border-[#BFA45A]"
                  />
                </div>
                <div>
                  <label className="text-xs uppercase tracking-[0.1em] text-[#555] dark:text-[#aaa]">Name (EN)</label>
                  <input
                    value={form.nameEn}
                    onChange={(e) => setForm({ ...form, nameEn: e.target.value })}
                    className="w-full mt-1 px-3 py-2 bg-[#F7F7F7] dark:bg-[#1a1a1a] border border-gray-200 dark:border-gray-700 text-sm text-[#111] dark:text-white focus:outline-none focus:border-[#BFA45A]"
                  />
                </div>
                <div>
                  <label className="text-xs uppercase tracking-[0.1em] text-[#555] dark:text-[#aaa]">Price (XAF)</label>
                  <input
                    type="number"
                    value={form.price}
                    onChange={(e) => setForm({ ...form, price: e.target.value })}
                    className="w-full mt-1 px-3 py-2 bg-[#F7F7F7] dark:bg-[#1a1a1a] border border-gray-200 dark:border-gray-700 text-sm text-[#111] dark:text-white focus:outline-none focus:border-[#BFA45A]"
                  />
                </div>
                <div>
                  <label className="text-xs uppercase tracking-[0.1em] text-[#555] dark:text-[#aaa]">Category</label>
                  <select
                    value={form.category}
                    onChange={(e) => setForm({ ...form, category: e.target.value })}
                    className="w-full mt-1 px-3 py-2 bg-[#F7F7F7] dark:bg-[#1a1a1a] border border-gray-200 dark:border-gray-700 text-sm text-[#111] dark:text-white focus:outline-none focus:border-[#BFA45A]"
                  >
                    <option value="resin">Resin</option>
                    <option value="gypsum">Gypsum</option>
                  </select>
                </div>
                <div>
                  <label className="text-xs uppercase tracking-[0.1em] text-[#555] dark:text-[#aaa]">Stock</label>
                  <input
                    type="number"
                    value={form.stock}
                    onChange={(e) => setForm({ ...form, stock: e.target.value })}
                    className="w-full mt-1 px-3 py-2 bg-[#F7F7F7] dark:bg-[#1a1a1a] border border-gray-200 dark:border-gray-700 text-sm text-[#111] dark:text-white focus:outline-none focus:border-[#BFA45A]"
                  />
                </div>
                <div className="flex items-center gap-2">
                  <input
                    type="checkbox"
                    checked={form.featured}
                    onChange={(e) => setForm({ ...form, featured: e.target.checked })}
                    className="w-4 h-4 accent-[#BFA45A]"
                  />
                  <label className="text-xs uppercase tracking-[0.1em] text-[#555] dark:text-[#aaa]">Featured</label>
                </div>
                <div className="sm:col-span-2">
                  <label className="text-xs uppercase tracking-[0.1em] text-[#555] dark:text-[#aaa]">Image</label>
                  <div className="flex gap-3 mt-1">
                    <input
                      value={form.image}
                      onChange={(e) => setForm({ ...form, image: e.target.value })}
                      placeholder="Image URL or upload"
                      className="flex-1 px-3 py-2 bg-[#F7F7F7] dark:bg-[#1a1a1a] border border-gray-200 dark:border-gray-700 text-sm text-[#111] dark:text-white focus:outline-none focus:border-[#BFA45A]"
                    />
                    <input
                      type="file"
                      ref={fileInputRef}
                      onChange={handleImageUpload}
                      accept="image/*"
                      className="hidden"
                    />
                    <button
                      type="button"
                      onClick={() => fileInputRef.current?.click()}
                      className="px-3 py-2 border border-gray-200 dark:border-gray-700 text-[#555] dark:text-[#aaa] hover:border-[#BFA45A] hover:text-[#BFA45A] transition-colors"
                    >
                      <Upload size={16} />
                    </button>
                  </div>
                  {form.image && (
                    <img src={form.image} alt="Preview" className="mt-2 w-20 h-20 object-cover bg-gray-100" />
                  )}
                </div>
                <div className="sm:col-span-2">
                  <label className="text-xs uppercase tracking-[0.1em] text-[#555] dark:text-[#aaa]">Description (FR)</label>
                  <textarea
                    value={form.description}
                    onChange={(e) => setForm({ ...form, description: e.target.value })}
                    rows={2}
                    className="w-full mt-1 px-3 py-2 bg-[#F7F7F7] dark:bg-[#1a1a1a] border border-gray-200 dark:border-gray-700 text-sm text-[#111] dark:text-white focus:outline-none focus:border-[#BFA45A] resize-none"
                  />
                </div>
                <div className="sm:col-span-2">
                  <label className="text-xs uppercase tracking-[0.1em] text-[#555] dark:text-[#aaa]">Description (EN)</label>
                  <textarea
                    value={form.descriptionEn}
                    onChange={(e) => setForm({ ...form, descriptionEn: e.target.value })}
                    rows={2}
                    className="w-full mt-1 px-3 py-2 bg-[#F7F7F7] dark:bg-[#1a1a1a] border border-gray-200 dark:border-gray-700 text-sm text-[#111] dark:text-white focus:outline-none focus:border-[#BFA45A] resize-none"
                  />
                </div>
              </div>
              <div className="flex gap-3 mt-6">
                <button
                  onClick={handleSave}
                  disabled={createMutation.isPending || updateMutation.isPending}
                  className="flex items-center gap-2 px-6 py-2 bg-[#111] dark:bg-white text-white dark:text-[#111] text-xs uppercase tracking-[0.1em] font-medium hover:bg-[#BFA45A] hover:text-white dark:hover:bg-[#BFA45A] transition-colors disabled:opacity-50"
                >
                  <Save size={14} />
                  {editingId ? "Update" : "Save"}
                </button>
                <button
                  onClick={() => {
                    setShowForm(false);
                    setForm(emptyForm);
                    setEditingId(null);
                  }}
                  className="px-6 py-2 border border-gray-200 dark:border-gray-700 text-xs uppercase tracking-[0.1em] text-[#555] dark:text-[#aaa] hover:border-[#111] dark:hover:border-white hover:text-[#111] dark:hover:text-white transition-colors"
                >
                  Cancel
                </button>
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Products List */}
        {isLoading ? (
          <p className="text-sm text-[#555] dark:text-[#aaa]">Loading...</p>
        ) : (
          <div className="bg-white dark:bg-[#0a0a0a] border border-gray-200 dark:border-gray-800">
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr className="border-b border-gray-200 dark:border-gray-800">
                    <th className="text-left text-xs uppercase tracking-[0.1em] text-[#555] dark:text-[#aaa] p-4">Image</th>
                    <th className="text-left text-xs uppercase tracking-[0.1em] text-[#555] dark:text-[#aaa] p-4">Name</th>
                    <th className="text-left text-xs uppercase tracking-[0.1em] text-[#555] dark:text-[#aaa] p-4">Price</th>
                    <th className="text-left text-xs uppercase tracking-[0.1em] text-[#555] dark:text-[#aaa] p-4">Category</th>
                    <th className="text-left text-xs uppercase tracking-[0.1em] text-[#555] dark:text-[#aaa] p-4">Stock</th>
                    <th className="text-left text-xs uppercase tracking-[0.1em] text-[#555] dark:text-[#aaa] p-4">Actions</th>
                  </tr>
                </thead>
                <tbody>
                  {products?.map((product: NonNullable<typeof products>[0]) => (
                    <tr key={product.id} className="border-b border-gray-100 dark:border-gray-800 hover:bg-[#F7F7F7] dark:hover:bg-[#1a1a1a] transition-colors">
                      <td className="p-4">
                        <img src={product.image} alt={product.name} className="w-12 h-12 object-cover" />
                      </td>
                      <td className="p-4 text-sm text-[#111] dark:text-white">{product.name}</td>
                      <td className="p-4 text-sm text-[#BFA45A] font-medium">{product.price.toLocaleString()} XAF</td>
                      <td className="p-4 text-sm text-[#555] dark:text-[#aaa] capitalize">{product.category}</td>
                      <td className="p-4 text-sm text-[#555] dark:text-[#aaa]">{product.stock}</td>
                      <td className="p-4">
                        <div className="flex gap-2">
                          <button
                            onClick={() => handleEdit(product)}
                            className="p-2 text-[#555] dark:text-[#aaa] hover:text-[#BFA45A] transition-colors"
                          >
                            <Edit2 size={14} />
                          </button>
                          <button
                            onClick={() => handleDelete(product.id)}
                            className="p-2 text-[#555] dark:text-[#aaa] hover:text-red-500 transition-colors"
                          >
                            <Trash2 size={14} />
                          </button>
                        </div>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            {(!products || products.length === 0) && (
              <p className="text-center py-12 text-sm text-[#555] dark:text-[#aaa]">No products yet. Add your first product above.</p>
            )}
          </div>
        )}
      </div>
    </div>
  );
}
