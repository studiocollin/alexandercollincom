export default function BioPage() {
    return (
      <main className="min-h-screen px-4 md:px-6 py-24 font-sans">
        <div className="max-w-5xl grid grid-cols-1 md:grid-cols-[2fr_1fr_1fr] gap-12">
          <div className="text-xs leading-relaxed space-y-2">
            <p>
            Alexander is a visual artist and creative director based in Stockholm, Sweden.
            </p>
            <p>
            Working across photography, film, and design, his practice is defined by a raw, intentional style. With natural intent, he captures the interplay of light, form, and emotion—where texture, composition, and movement give space for meaning to emerge.
            </p>
            <p>Rooted in culture and collaboration, Alexander moves fluidly between disciplines, creating both commissioned and experimental works with conceptual depth and visual clarity.</p>
            <p>Available for work worldwide.</p>
            <p>
              <a href="mailto:alexander@alexandercollin.com" className="underline" target="_blank">
                Mail
              </a><br />
              <a href="https://instagram.com/alexandercollin" className="underline" target="_blank">
                Instagram
              </a>
              <br />
              <br />
            </p>
            <h3 className="font-medium">Studio Collin</h3>
            <p>In addition, Alexander is also the founder and director of <a href="studiocollin.se" className="underline" target="_blank">Studio Collin</a>, a creative studio working across photography, film, creative direction, and design for digital and print - shaping visuals that lasts and campaigns resonating beyond the moment.  </p>
            <p>The studio operates in parallel to his personal artistic practice.</p>
          </div>
  
          <div className="text-xs leading-relaxed space-y-2">
          <h3 className="font-medium">Selected clients</h3>
           <ul>
           <li>NONONO</li>
           <li>Loreen</li>
           <li>José González</li>
           <li>KIDDO</li>
           <li>Peter Jöback</li>
           <li>Miriam Bryant</li>
           <li>Håkan Hellström</li>
           <li>Kerstin Ljungström</li>
           <li>JIM OUMA</li>
           <li>Sabina Ddumba</li>
           <li>Maja Francis</li>
           <li>Gustaf & Viktor Norén</li>
           </ul>
           <h3 className="font-medium">Labels</h3>
           <ul>
           <li>Sony Music</li>
           <li>Universal Music</li>
           <li>Warner Music</li>
           <li>RMV Grammofon</li>
           <li>Asylum Records</li>
           <li>Cosmos Music</li>
           </ul>
           <h3 className="font-medium">Agencies/Companies/Brands</h3>
           <ul>
           <li>Einride</li>
           <li>SNASK</li>
           <li>ASUS</li>
           <li>Chromia</li>
           </ul>
          </div>
          <div className="text-xs leading-relaxed space-y-2">
          <h3 className="font-medium">Awards</h3>
           <ul>
           <li>Adobe/Behance Best in Film, 2020</li>
           <li>Adobe/Behance Best in AE, 2020</li>
           <li>Adobe/Behance Best in Music Packaging, 2019</li>
           <li>FWA & Adobe Cutting Edge Award, 2014</li>
           <li>FWA SOTD, 2014</li>
            </ul>
          </div>
        </div>
      </main>
    );
  }