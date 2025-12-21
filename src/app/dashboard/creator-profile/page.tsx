
'use client';

import { CreatorProfile } from '@/components/creator-profile';
import { Card, CardContent } from '@/components/ui/card';

export default function CreatorProfilePage() {
  return (
    <div className="max-w-2xl mx-auto">
        <Card>
            <CardContent className="pt-6">
                <CreatorProfile />
            </CardContent>
        </Card>
    </div>
  );
}
