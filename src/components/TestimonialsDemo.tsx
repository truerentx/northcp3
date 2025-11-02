import { TestimonialsSection } from "@/components/ui/testimonials-with-marquee"

const testimonials = [
  {
    author: {
      name: "Sarah Chen",
      handle: "@sarahtech",
      avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=150&h=150&fit=crop&crop=face"
    },
    text: "Northbyte automated our entire lead qualification process. We're now closing deals 3x faster than before."
  },
  {
    author: {
      name: "Michael Torres",
      handle: "@mtorres",
      avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop&crop=face"
    },
    text: "The compliance automation saved us hundreds of hours. Their AI system is incredibly accurate and reliable."
  },
  {
    author: {
      name: "Emily Rodriguez",
      handle: "@emilydev",
      avatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=150&h=150&fit=crop&crop=face"
    },
    text: "We went from manual data entry to full automation in 2 weeks. The ROI has been phenomenal."
  },
  {
    author: {
      name: "James Wilson",
      handle: "@jwilson",
      avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=150&h=150&fit=crop&crop=face"
    },
    text: "Their AI workflows handle our customer follow-ups 24/7. We haven't missed a single lead since implementation."
  },
  {
    author: {
      name: "Lisa Park",
      handle: "@lisapark",
      avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150&h=150&fit=crop&crop=face"
    },
    text: "Northbyte's automation reduced our operational costs by 60%. The system pays for itself every month."
  },
  {
    author: {
      name: "David Kumar",
      handle: "@dkumar",
      avatar: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=150&h=150&fit=crop&crop=face"
    },
    text: "Finally, an automation solution that actually understands our business logic. Setup was seamless."
  }
]

export default function TestimonialsDemo() {
  return (
    <TestimonialsSection
      title="Trusted by Founders Who Value Their Time"
      description="Join hundreds of businesses running autonomous operations with Northbyte Systems"
      testimonials={testimonials}
    />
  )
}
