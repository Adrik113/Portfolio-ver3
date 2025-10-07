import Image from "next/image";
export default function About() {
  return (
    <main className="min-h-screen px-6 py-20 bg-gray-50 text-gray-900 text-center">
      <h1 className="text-4xl font-bold mb-6">About Me</h1>

      {/* Profile Image */}
      <div className="flex justify-center mb-8">
        <Image 
           src="/Profile.png"
            alt=" Adrik Profile Picture"
            width={200}
            height={200}
            className="rounded-full shadow-lg border-4 border-green-400"
            priority
        />
      </div>

      {/* Bio */}
      <p className="text-lg max-w-2xl mb-6 mx-auto">
        Hi, I&apos;m <span className="text-green-400 font-semibold">Adrik</span>. 
        I&apos;m a recent graduate passionate about building full-stack applications
        and exploring modern technologies. My background is primarily academic, 
        where I&apos;ve gained experience working with languages such as 
        <span className="text-green-400"> Java</span>, 
        <span className="text-green-300"> Python</span>, and 
        <span className="text-green-300"> PHP</span>.
      </p>

      <p className="text-lg max-w-2xl mb-6 mx-auto">
        Beyond academics, I also have professional experience with 
        <span className="text-green-400 font-semibold"> Kotlin</span> through my apprenticeship at 
        <span className="text-green-400 font-semibold"> TriSphere Apps</span>, 
        where I contributed to backend development. This opportunity helped me 
        strengthen my Kotlin skills, gain real-world problem-solving experience, 
        and build a strong foundation in backend practices.
      </p>

      <p className="text-lg max-w-2xl mb-6 mx-auto">
        I&apos;m passionate about solving problems, building intuitive user experiences, 
        and creating reliable, scalable applications. Whether it&apos;s working on backend systems 
        or developing full-stack solutions, I love bringing ideas to life through code.
      </p>

      <p className="text-lg max-w-2xl mx-auto">
        When I’m not coding, I enjoy exploring new technologies, gaming, and drawing. 
        I also love watching anime and thought-provoking movies and shows — right now, 
        I’m obsessed with <em>Supernatural</em>. These hobbies keep me creative and curious, 
        often inspiring my work as a developer.
      </p>

      <p className="text-lg max-w-2xl mt-8 font-semibold text-green-500 mx-auto">
        I&apos;m excited to continue growing as a developer and contribute my skills to 
        impactful projects and innovative teams.
      </p>
    </main>
  );
}