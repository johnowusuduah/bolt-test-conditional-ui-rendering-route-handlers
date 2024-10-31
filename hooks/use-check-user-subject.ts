import { useQuery } from '@tanstack/react-query';

export function useCheckUserSubject(userId: string) {
  return useQuery({
    queryKey: ['userSubject', userId],
    queryFn: async () => {
      const response = await fetch(`/api/check-user-subject?userId=${userId}`);
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      return response.json();
    },
    enabled: !!userId, // Only run the query if userId is available
  });
}