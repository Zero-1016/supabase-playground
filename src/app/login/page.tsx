export default function Login() {
  return (
    <form action="/auth/login" method="post">
      <label htmlFor="email">Email</label>
      <input className="text-black" name="email" />
      <label htmlFor="password">Password</label>
      <input className="text-black" type="password" name="password" />
      <button>Sign In</button>
    </form>
  );
}
