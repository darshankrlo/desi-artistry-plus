import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Sparkles, Upload, Eye } from 'lucide-react';

export const StorytellerPage = () => {
  const [storyTitle, setStoryTitle] = useState('');
  const [introduction, setIntroduction] = useState('');
  const [aiPrompt, setAiPrompt] = useState('');
  const [materials, setMaterials] = useState('');
  const [techniques, setTechniques] = useState('');
  const [mainContent, setMainContent] = useState('');

  const galleryImages = [
    { id: 1, placeholder: "Upload your artwork photos" },
    { id: 2, placeholder: "Add process images" },
    { id: 3, placeholder: "Include finished pieces" },
    { id: 4, placeholder: "Show detail shots" },
    { id: 5, placeholder: "Behind the scenes" },
    { id: 6, placeholder: "Studio workspace" },
  ];

  return (
    <div className="min-h-screen bg-background p-6">
      <div className="max-w-6xl mx-auto">
        <div className="mb-8">
          <h1 className="text-4xl font-bold text-foreground mb-4">Craft Your Story</h1>
          <p className="text-muted-foreground text-lg">
            Share the passion, process, and uniqueness behind your creations with AI assistance.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* AI Story Weaver */}
          <Card className="shadow-card">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Sparkles className="w-5 h-5 text-terracotta" />
                AI Story Weaver
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              <div>
                <label className="text-sm font-medium text-foreground mb-2 block">
                  Story Title
                </label>
                <Input
                  placeholder="e.g., The Art of Hand-knitted Scarves"
                  value={storyTitle}
                  onChange={(e) => setStoryTitle(e.target.value)}
                  className="bg-background"
                />
              </div>

              <div>
                <label className="text-sm font-medium text-foreground mb-2 block">
                  Introduction
                </label>
                <Textarea
                  placeholder="Introduce your craft and its essence..."
                  value={introduction}
                  onChange={(e) => setIntroduction(e.target.value)}
                  className="bg-background min-h-[100px]"
                />
              </div>

              <div>
                <label className="text-sm font-medium text-foreground mb-2 block">
                  AI Prompt (Optional)
                </label>
                <Textarea
                  placeholder="Describe your inspiration or process for AI to generate narrative..."
                  value={aiPrompt}
                  onChange={(e) => setAiPrompt(e.target.value)}
                  className="bg-background min-h-[80px]"
                />
                <p className="text-xs text-muted-foreground mt-2">
                  Example: "Explain the traditional weaving techniques passed down through generations for this pottery."
                </p>
              </div>

              <Button variant="artisan" className="w-full">
                <Sparkles className="w-4 h-4 mr-2" />
                Generate Story Snippet
              </Button>
            </CardContent>
          </Card>

          {/* Multimedia Gallery */}
          <Card className="shadow-card">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Upload className="w-5 h-5 text-terracotta" />
                Multimedia Gallery
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-2 gap-4">
                {galleryImages.map((item) => (
                  <div
                    key={item.id}
                    className="aspect-square bg-secondary border-2 border-dashed border-border rounded-lg flex items-center justify-center cursor-pointer hover:bg-accent/50 transition-colors"
                  >
                    <div className="text-center">
                      <Upload className="w-8 h-8 text-muted-foreground mx-auto mb-2" />
                      <p className="text-xs text-muted-foreground">{item.placeholder}</p>
                    </div>
                  </div>
                ))}
              </div>
              <p className="text-xs text-muted-foreground mt-4">
                Drag and drop images or videos, or click to upload (Max 10MB)
              </p>
            </CardContent>
          </Card>
        </div>

        {/* Story Details */}
        <Card className="mt-8 shadow-card">
          <CardHeader>
            <CardTitle>Story Details</CardTitle>
          </CardHeader>
          <CardContent className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="text-sm font-medium text-foreground mb-2 block">
                  Materials Used
                </label>
                <Input
                  placeholder="e.g., Organic Cotton, Natural Dyes"
                  value={materials}
                  onChange={(e) => setMaterials(e.target.value)}
                  className="bg-background"
                />
              </div>

              <div>
                <label className="text-sm font-medium text-foreground mb-2 block">
                  Techniques
                </label>
                <Input
                  placeholder="e.g., Hand-weaving, Block Printing"
                  value={techniques}
                  onChange={(e) => setTechniques(e.target.value)}
                  className="bg-background"
                />
              </div>
            </div>

            <div>
              <label className="text-sm font-medium text-foreground mb-2 block">
                Main Story Content
              </label>
              <Textarea
                placeholder="Write keywords related to your story... we'll handle the rest..."
                value={mainContent}
                onChange={(e) => setMainContent(e.target.value)}
                className="bg-background min-h-[150px]"
              />
            </div>
          </CardContent>
        </Card>

        {/* Preview Section */}
        <Card className="mt-8 shadow-card">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Eye className="w-5 h-5 text-terracotta" />
              Preview
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="min-h-[200px] bg-gradient-warm rounded-lg p-6 text-center flex items-center justify-center">
              <p className="text-muted-foreground">
                Your beautifully crafted story will be displayed here, combining text and media in an engaging layout.
              </p>
            </div>
          </CardContent>
        </Card>

        {/* Action Buttons */}
        <div className="flex gap-4 mt-8 justify-end">
          <Button variant="outline">Save Draft</Button>
          <Button variant="artisan" size="lg">
            Publish Story
          </Button>
        </div>
      </div>
    </div>
  );
};