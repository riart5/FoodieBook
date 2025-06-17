import { useState } from 'react'

function Register() {
  const [form, setForm] = useState({ username: '', email: '', password: '' })

  const handleSubmit = async (e) => {
    e.preventDefault()
    try {
      const res = await fetch('http://localhost:5000/api/auth/register', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form),
      })

      const data = await res.json()
      if (res.ok) {
        alert('Registro correcto 🎉')
      } else {
        alert(data.message)
      }
    } catch (err) {
      alert('Error al conectar con el servidor')
    }
  }

  return (
    <div className="p-4 max-w-sm mx-auto">
      <h2 className="text-xl font-bold mb-4">Registro</h2>
      <form onSubmit={handleSubmit} className="space-y-3">
        <input
          className="w-full border p-2"
          type="text"
          placeholder="Nombre de usuario"
          value={form.username}
          onChange={e => setForm({ ...form, username: e.target.value })}
          required
        />
        <input
          className="w-full border p-2"
          type="email"
          placeholder="Correo"
          value={form.email}
          onChange={e => setForm({ ...form, email: e.target.value })}
          required
        />
        <input
          className="w-full border p-2"
          type="password"
          placeholder="Contraseña"
          value={form.password}
          onChange={e => setForm({ ...form, password: e.target.value })}
          required
        />
        <button className="w-full bg-green-600 text-white py-2">Registrarse</button>
      </form>
    </div>
  )
}

export default Register
