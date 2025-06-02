import Link from "next/link";

const SignInPanel = () => {
  return (
    <>
      <Link href={"/auth/signin"}>Iniciar Sesión</Link>
      <Link href={"/auth/signup"}>Registrarse</Link>
    </>
  );
};

export default SignInPanel;