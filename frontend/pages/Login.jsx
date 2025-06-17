import { useState } from 'react'

function Login() {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const handleSubmit = async (e) => {
    e.preventDefault()
    try {
      const res = await fetch('http://localhost:5000/api/auth/login', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email, password }),
      })

      const data = await res.json()
      if (res.ok) {
        alert('Login correcto ✅')
        console.log(data)
        // Aquí puedes guardar el token: localStorage.setItem('token', data.token)
      } else {
        alert(data.message)
      }
    } catch (err) {
      alert('Error al conectar con el servidor')
    }
  }

  return (
    <div className="p-4 max-w-sm mx-auto">
      <h2 className="text-xl font-bold mb-4">Iniciar sesión</h2>
      <form onSubmit={handleSubmit} className="space-y-3">
        <input
          className="w-full border p-2"
          type="email"
          placeholder="Correo"
          value={email}
          onChange={e => setEmail(e.target.value)}
          required
        />
        <input
          className="w-full border p-2"
          type="password"
          placeholder="Contraseña"
          value={password}
          onChange={e => setPassword(e.target.value)}
          required
        />
        <button className="w-full bg-blue-600 text-white py-2">Entrar</button>
      </form>
    </div>
  )
}

export default Login
