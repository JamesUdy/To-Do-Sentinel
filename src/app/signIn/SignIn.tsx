
import { auth } from "@/firebaseAuth/FirebaseAuth";
import { GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import { useRouter } from "next/navigation";
import { DarkCurvedArrow, darkThemeLogo, LightCurvedArrow, lightThemeLogo } from "@/assets";
import useAuth from "@/app/hooks/useAuth";
import Image from "next/image";
import "./SignIn.css";
import { ThemeToggleButton } from '@/assets/todoAssets';
import Link from "next/link";

const SignIn = () => {
    const router = useRouter(); 
    const { user, isLoggedIn, setIsLoggedIn, loading } = useAuth();
    
    const handleAuth = async () => {
      const googleSignIn = new GoogleAuthProvider();
      googleSignIn.setCustomParameters({
        prompt: 'select_account',
      })
      signInWithPopup(auth, googleSignIn)
      .then((result) => {
        const credential = GoogleAuthProvider.credentialFromResult(result);
        const token = credential?.accessToken;
        const user = result.user;

        setIsLoggedIn(true);
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        const errorEmail = error.customData.email;

        const credential = GoogleAuthProvider.credentialFromError(error);
      });
    };

  return (
    <section className="flex flex-col items-center my-auto w-full space-y-4 font-mono">
      <span className="text-3xl w360:text-5xl sm:text-6xl font-bold website-name">To Do Sentinel</span>
      <p className="text-xs w360:text-md sm:text-lg text-center font-medium text-slate-800 dark:text-slate-500 my-4 px-4 sm:px-0 lg:w-1/2">
        Welcome to To Do Sentinel - Your Ultimate Task Management App! 🚀✨<br />
        Stay organized, boost productivity, and never forget a task 📈✅.
        <br /><br />
        Ready to take control of your tasks? 📋🏆
        <br /><br />
        Sign in now to start exploring your to-do list and supercharge your productivity! 🚀💪
      </p>
      <section className="overflow-hidden w-full mx-auto flex justify-center" aria-disabled='true'>
        <Image loading="lazy" src={lightThemeLogo} alt="ToDo Sentinel Logo" className="rotate-logo w-1/2 sm:w-1/4 inline-block dark:hidden"/>
        <Image loading="lazy" src={darkThemeLogo} alt="ToDo Sentinel Logo" className="rotate-logo w-1/2 sm:w-1/4 hidden dark:inline-block"/>
      </section>
      <section className="relative w-1/2 flex justify-center">
      { !loading ? (
          !isLoggedIn ? (
            <button className="px-4 py-1 rounded-md font-bold ease-in duration-200 text-slate-200 dark:text-slate-950 bg-slate-950 hover:bg-slate-950 dark:bg-slate-100 hover:dark:bg-slate-200" onClick={() => handleAuth()}>Sign In</button>
          ) : (
            <>
              <Link href='/todo-list' className="px-4 py-1 rounded-md font-bold ease-in duration-200 text-slate-200 dark:text-slate-950 bg-slate-950 hover:bg-slate-950 dark:bg-slate-100 hover:dark:bg-slate-200 hover:scale-110">Go To Form</Link>
            </>
          )
        ) : (
          <div className="w-24 py-1 sm:px-3 text-md font-bold text-slate-200 dark:text-slate-950 bg-slate-950 dark:bg-slate-200 rounded-md shadow-lg shadow-slate-900 ease-in duration-200">
            <div className='flex mx-auto loader'></div>
          </div>
        )
      }
        <section className="absolute -left-14 w360:-left-12 w425:-left-8 sm:left-12 w800:left-16 lg:left-24 xl:left-36 w1440:left-1/4 bottom-1/3 flex justify-start">
          <Image loading="lazy" src={DarkCurvedArrow} alt="Sign In Button Indicating Arrow" className="w-16 lg:w-20 xl:w-24 mx-4 inline-block dark:hidden" />
          <Image loading="lazy" src={LightCurvedArrow} alt="Sign In Button Indicating Arrow" className="w-16 lg:w-20 xl:w-24 mx-4 hidden dark:inline-block" />
        </section>
      </section>
       {/* <a href="https://www.flaticon.com/free-icons/curved-arrow" title="curved arrow icons">Curved arrow icons created by Freepik - Flaticon</a>*/}
       <ThemeToggleButton />
    </section>
  )
};

export default SignIn;
