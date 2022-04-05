import { motion } from 'framer-motion';

const features = [
  {
    name: '❤️ Captive-Born-Bred ❤️',
    description:
      'Always purchase captive, born, and bred animals. Wild and imported animals are typically parasite ridden, more aggressive, and less likely to thrive',
  },
  {
    name: '🌿 Custom Enclosures 🌿',
    description:
      'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Maiores impedit perferendis suscipit eaque, iste dolor cupiditate blanditiis ratione.',
  },
  {
    name: '🐁 Feeders and Services 🐁',
    description:
      'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Maiores impedit perferendis suscipit eaque, iste dolor cupiditate blanditiis ratione.',
  },
]

export default function Overview() {
  return (
    <div className="py-12 bg-slate">
      <motion.div 
      whileInView={{ opacity: [0, 1] }}
      transition={{ duration: 0.9 }}
      className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div
        className="lg:text-center">
          <h2 className="text-center text-emerald-400 font-semibold tracking-wide uppercase">About us</h2>
          <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-white sm:text-4xl">
            Just say <span className='text-red-500'>NO</span> to impulsive purchases!
          </p>
          <p className="mt-4 max-w-2xl text-xl text-white lg:mx-auto">
            Always have a proper enclosure established BEFORE you bring your pet home.
          </p>
        </div>
        <div className="mt-10">
          <dl className="flex 2xl:flex-row xl:flex-row lg:flex-row md:flex-row flex-col space-x-4">
            {features.map((feature) => (
              <div key={feature.name} className="relative">
                <dt>
                  <p className="text-lg text-center leading-6 pt-5 font-medium text-emerald-400">{feature.name}</p>
                </dt>
                <dd className="mt-2 text-center leading-relaxed text-white">{feature.description}</dd>
              </div>
            ))}
          </dl>
        </div>
      </motion.div>
    </div>
  )
}
