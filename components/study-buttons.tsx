'use client';

import { useCheckUserSubject } from '@/hooks/use-check-user-subject';
import { Button } from '@/components/ui/button';
import { Loader2 } from 'lucide-react';

interface StudyButtonsProps {
  userId: string;
  onCreateSubject: () => void;
  onSelectStudySession: () => void;
}

export function StudyButtons({
  userId,
  onCreateSubject,
  onSelectStudySession,
}: StudyButtonsProps) {
  const { data, isLoading, error } = useCheckUserSubject(userId);

  if (isLoading) {
    return (
      <Button disabled>
        <Loader2 className="mr-2 h-4 w-4 animate-spin" />
        Loading...
      </Button>
    );
  }

  if (error) {
    return (
      <Button variant="destructive" disabled>
        Error loading subject status
      </Button>
    );
  }

  if (data?.hasSubject) {
    return (
      <Button
        onClick={onSelectStudySession}
        className="bg-green-600 hover:bg-green-700"
      >
        Select Type of Study Session
      </Button>
    );
  }

  return (
    <Button
      onClick={onCreateSubject}
      className="bg-blue-600 hover:bg-blue-700"
    >
      Create Subject
    </Button>
  );
}