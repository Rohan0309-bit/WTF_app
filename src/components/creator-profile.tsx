'use client';

import Image from 'next/image';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Linkedin, Github, Instagram, Mail } from 'lucide-react';
import Link from 'next/link';

const socialLinks = [
  {
    href: 'mailto:rohanrajput0362@gmail.com',
    icon: Mail,
    label: 'Email',
  },
  {
    href: 'https://www.linkedin.com/in/rohananand09/',
    icon: Linkedin,
    label: 'LinkedIn',
  },
  {
    href: 'https://github.com/Rohan0309-bit',
    icon: Github,
    label: 'GitHub',
  },
  {
    href: 'https://www.instagram.com/rohann.rajput_3?igsh=OWJtazBqMzcwYXBm',
    icon: Instagram,
    label: 'Instagram',
  },
];

export function CreatorProfile() {
  return (
    <div className="flex flex-col items-center text-center p-4 space-y-6 pt-8">
      <div className="relative w-32 h-32 md:w-40 md:h-40 rounded-xl shadow-lg border-4 border-primary overflow-hidden">
        <Image 
          src="https://i.ibb.co/HDS3XnGm/Whats-App-Image-2025-12-21-at-19-30-53.jpg" 
          alt="Rohan Anand" 
          layout="fill"
          objectFit="cover"
          className="transition-transform duration-300 hover:scale-105"
        />
      </div>

      <div className="space-y-1">
        <h2 className="text-2xl font-bold font-headline">Rohan Anand</h2>
        <p className="text-sm text-muted-foreground">Founder & Developer of WTF</p>
      </div>

      <Card className="text-left bg-secondary/50 p-4">
        <p className="text-sm text-secondary-foreground">
          Hi! I’m Rohan Anand, founder and developer of WTF (Well Trained Freak). This app helps users improve fitness, sports performance, and body presentation through structured and AI-generated workouts. It solves the problem of scattered fitness resources by providing personalized training, skill drills, and nutrition guidance in one platform.
        </p>
      </Card>

      <div className="space-y-2">
        <h3 className="font-semibold">Connect with me</h3>
        <div className="flex items-center justify-center gap-4">
          {socialLinks.map(({ href, icon: Icon, label }) => (
            <Link href={href} key={label} target="_blank" rel="noopener noreferrer">
              <Button variant="outline" size="icon" aria-label={label}>
                <Icon className="h-5 w-5" />
              </Button>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
