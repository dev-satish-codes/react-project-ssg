import { BrowserRouter, Link, Route, Routes } from "react-router-dom";
import { TutorialHome } from "./video-tutorial-home";
import { LoginTutorial } from "./video-tutorial-login";
import { RegisterTutorial } from "./video-tutorial-register";
import { VideosTutorial } from "./video-tutorial-videos";


export function VideosIndex(){

    return(
        <div className="container-fluid">
             <BrowserRouter>
            <header className="h1 bg-dark text-white text-center">Video Tutorials</header>
            <section className="row mt-4">
                <nav className="col-2 bg-light">
                <div className="btn btn-dark w-100 mb-2 mt-2">
                        <Link to='/' className="text-white text-decoration-none">Home</Link>
                    </div>

                    <div className="btn btn-dark w-100 mb-2 mt-2">
                        <Link to='login' className="text-white text-decoration-none">Login</Link>
                    </div>

                    <div className="btn btn-dark w-100 mb-2 mt-2">
                    <Link to='register' className="text-white text-decoration-none">Register</Link>
                    </div>

                    <div className="btn btn-dark w-100 mb-2 mt-2">
                    <Link to='videos' className="text-white text-decoration-none">Videos</Link>
                    </div>
                </nav>
                <main className="col-8">

                <Routes>
                    <Route path="/" element={<TutorialHome/>}></Route>
                    <Route path="login" element={<LoginTutorial/>}></Route>
                    <Route path="register" element={<RegisterTutorial/>}></Route>
                    <Route path="videos" element={<VideosTutorial/>}></Route>
                </Routes>

                </main>
            </section>
            </BrowserRouter>
             
        </div>
    )
}