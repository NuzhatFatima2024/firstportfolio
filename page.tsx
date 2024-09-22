import Image from "next/image";

export default function Home() {
  return (
    <div className="parentcontainer">
      <div className="childcontainer">
        <h1>Welcome to my Profile</h1>
        <br />
        <h1>
          Hello!
        </h1><br />
<p>I'm <span className="blueColor">Nuzhat Fatima</span></p>
<p>I'm learning<abbr title="Artificial Intelligence"> AI</abbr> from <abbr title="Governor Inititive Artificial Intelligence Certification">GIAIC</abbr></p>
<p>Now, I start to learn Next.Js</p>
<p>I want to become a developer</p></div>
<div className="childcontainer">
<div className="image-frame">
<Image
          className="mt-0"
          src="/pic/nuzhat.jpg" 
          alt="Iffat image"
          width={200}
          height={200}
         ></Image>
         </div>
         </div>
         </div>
         );
         };
   
