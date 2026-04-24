'use client';

import { useState } from 'react';
import Image from 'next/image';
import archiveData from './archiveData';

export default function ArchivePage() {
  const [selectedItem, setSelectedItem] = useState(null);

  return (
    <main className="min-h-screen px-4 md:px-6 py-24 font-sans">
      
      {/* GRID */}
      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-12">
        {archiveData.map((project, index) => (
          <div
            key={index}
            className="group cursor-pointer"
            onClick={() => setSelectedItem(project)}
          >
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

      {/* MODAL */}
      {selectedItem && (
        <div
          className="fixed inset-0 bg-black/90 flex items-center justify-center z-50"
          onClick={() => setSelectedItem(null)}
        >
          <div className="relative max-w-[90vw] max-h-[90vh]">
            {selectedItem.type === 'image' ? (
              <Image
                src={selectedItem.image}
                alt={selectedItem.title}
                width={selectedItem.width}
                height={selectedItem.height}
                className="object-contain max-h-[90vh] w-auto h-auto"
              />
            ) : (
              <video
                src={selectedItem.video}
                controls
                autoPlay
                className="max-h-[90vh] max-w-[90vw]"
              />
            )}
          </div>
        </div>
      )}
    </main>
  );
}