import Image from 'next/image';
import archiveData from './archiveData';

export default function ArchivePage() {
  return (
    <main className="min-h-screen px-4 md:px-6 py-24 font-sans">
      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-12">
      {archiveData.map((project, index) => (
          <div key={index} className="group cursor-default">
            <div
              className="relative w-full overflow-hidden"
              style={{
                aspectRatio: `${project.width} / ${project.height}`,
              }}
            >
              {project.type === 'image' ? (
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  className="object-cover"
                />
              ) : (
                <video
                  src={project.video}
                  autoPlay
                  muted
                  loop
                  playsInline
                  preload="none"
                  className="absolute w-full h-full object-cover"
                />
              )}
            </div>
          </div>
        ))}
      </div>
    </main>
  );
}