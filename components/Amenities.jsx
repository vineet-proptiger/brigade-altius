'use client'
import React from 'react'
import {
  Dumbbell, Target, Waves, Footprints, Landmark, Flower2, Cctv, Clapperboard
} from 'lucide-react'

const F_JOST = 'var(--font-jost), Montserrat, sans-serif'
const F_SANS = 'var(--font-sans), Open Sans, sans-serif'


const CurvedCorners = ({ bg = '#fff', color = '#e5e7eb' }) => {
  const corners = [
    { top: '-1px', left: '-1px', borderRight: `1px solid ${color}`, borderBottom: `1px solid ${color}`, borderBottomRightRadius: '18px' },
    { top: '-1px', right: '-1px', borderLeft: `1px solid ${color}`, borderBottom: `1px solid ${color}`, borderBottomLeftRadius: '18px' },
    { bottom: '-1px', left: '-1px', borderRight: `1px solid ${color}`, borderTop: `1px solid ${color}`, borderTopRightRadius: '18px' },
    { bottom: '-1px', right: '-1px', borderLeft: `1px solid ${color}`, borderTop: `1px solid ${color}`, borderTopLeftRadius: '18px' },
  ]
  return corners.map((c, i) => (
    <span key={i} style={{ position: 'absolute', ...c, width: '22px', height: '22px', background: bg, display: 'block' }} />
  ))
}

const newAmenities = [
  { icon: Waves,        title: 'SWIMMING POOL',     desc: 'Dive into luxury at our stunning swimming pool, designed for relaxation and rejuvenation.' },
  { icon: Dumbbell,     title: 'GYM',               desc: 'Stay fit while enjoying breathtaking views at our fully equipped modern gym.' },
  { icon: Footprints,   title: 'JOGGING TRACK',     desc: 'Rejuvenate your mind and body on our scenic jogging track, surrounded by lush greenery.' },
  { icon: Flower2,      title: 'YOGA PAVILION',     desc: 'Find inner peace and balance in our dedicated serene yoga space.' },
  { icon: Target,       title: 'TENNIS COURT',      desc: 'Unleash your energy with a premium tennis court designed for active living.' },
  { icon: Cctv,         title: '24/7 CCTV',         desc: 'Experience complete peace of mind with round-the-clock comprehensive security.' },
  { icon: Landmark,     title: 'CLUB HOUSE',        desc: 'Your gateway to relaxation, socializing, and a vibrant community lifestyle.' },
  { icon: Clapperboard, title: 'MINI THEATER',      desc: 'Enjoy a cinematic experience with family and friends in our exclusive mini theater.' },
]

const Amenities = () => {
  return (
    <section id="amenities" style={{
      padding: '72px 0',
      background: '#fff',
    }}>
      <div className="container mx-auto px-4 md:px-8 max-w-[1200px]">

        {/* Section Header */}
        <div style={{ marginBottom: '40px', textAlign: 'center' }} data-aos="fade-up">
          <h2 style={{
            fontFamily: F_JOST, fontWeight: '700', fontSize: '18px',
            color: '#684C1B', letterSpacing: '0.05em', textTransform: 'uppercase', margin: 0,
            display: 'flex', alignItems: 'center', justifyContent: 'center',
          }}>
            LIFESTYLE AMENITIES
          </h2>
        </div>

        {/* Grid Container */}
        <div data-aos="fade-up" data-aos-delay="100" style={{
          position: 'relative',
          border: '1px solid #e5e7eb',
          margin: '0 auto',
        }}>
          <CurvedCorners color="#e5e7eb" bg="#fff" />

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-[1px] bg-[#e5e7eb]">
            {newAmenities.map((item, idx) => (
              <div key={idx} className="bg-white flex flex-col items-center group" style={{
                padding: '48px 24px',
                textAlign: 'center',
              }}>
                {/* Icon */}
                <div className="w-[80px] h-[80px] rounded-full flex items-center justify-center mb-6 text-white group-hover:scale-105 transition-transform duration-300" style={{ background: '#C9A96E' }}>
                  <item.icon size={36} strokeWidth={1.5} />
                </div>

                {/* Title */}
                <h3 style={{
                  fontFamily: F_JOST, fontSize: '15px', fontWeight: '600',
                  color: '#684C1B', letterSpacing: '0.12em', margin: '0 0 12px'
                }}>
                  {item.title}
                </h3>

                {/* Description */}
                <p style={{
                  fontFamily: F_SANS, fontSize: '13px', color: '#6b7280',
                  lineHeight: 1.6, margin: 0,
                  textAlign: 'justify'
                }}>
                  {item.desc}
                </p>
              </div>
            ))}

          </div>
        </div>

      </div>
    </section>
  )
}

export default Amenities
