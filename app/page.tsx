import { StudyButtons } from '@/components/study-buttons';

export default function Home() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-gray-50 to-gray-100 py-12 px-4">
      <div className="max-w-4xl mx-auto">
        <div className="bg-white rounded-lg shadow-xl p-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-8 text-center">
            Study Session Manager
          </h1>
          
          <div className="flex justify-center">
            <StudyButtons
              userId="your-user-id-here" // Replace with actual user ID from your auth system
              onCreateSubject={() => {
                // Handle create subject action
                console.log('Creating subject...');
              }}
              onSelectStudySession={() => {
                // Handle select study session action
                console.log('Selecting study session...');
              }}
            />
          </div>
        </div>
      </div>
    </main>
  );
}