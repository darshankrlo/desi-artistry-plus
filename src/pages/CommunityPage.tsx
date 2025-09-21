import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Send, Sparkles, Heart, MessageCircle, Share2 } from 'lucide-react';

const messages = [
  {
    id: 1,
    user: "Priya Sharma",
    avatar: "PS",
    message: "Just finished a beautiful Madhubani painting! The traditional fish motifs turned out amazing.",
    time: "2 hours ago",
    likes: 12,
    replies: 3
  },
  {
    id: 2,
    user: "Rajesh Kumar",
    avatar: "RK",
    message: "Looking for advice on pottery glazing techniques. Any master potters here?",
    time: "4 hours ago", 
    likes: 8,
    replies: 7
  },
  {
    id: 3,
    user: "Anita Devi",
    avatar: "AD",
    message: "Sharing some photos from today's weaving session. The colors are so vibrant!",
    time: "6 hours ago",
    likes: 15,
    replies: 5
  }
];

export const CommunityPage = () => {
  const [newMessage, setNewMessage] = useState('');

  const handleSendMessage = () => {
    if (newMessage.trim()) {
      // Handle sending message
      setNewMessage('');
    }
  };

  return (
    <div className="h-full bg-background flex flex-col">
      {/* Header */}
      <div className="p-6 border-b border-border">
        <h1 className="text-3xl font-bold text-foreground mb-2">Community Chat</h1>
        <p className="text-muted-foreground">Connect with fellow artisans across India</p>
      </div>

      {/* Messages Area */}
      <div className="flex-1 overflow-y-auto p-6 space-y-4">
        {messages.map((message) => (
          <Card key={message.id} className="shadow-card hover:shadow-warm transition-shadow">
            <CardContent className="p-4">
              <div className="flex items-start gap-3">
                {/* Avatar */}
                <div className="w-10 h-10 bg-gradient-to-br from-terracotta to-terracotta-light rounded-full flex items-center justify-center text-primary-foreground font-semibold text-sm">
                  {message.avatar}
                </div>
                
                {/* Message Content */}
                <div className="flex-1">
                  <div className="flex items-center gap-2 mb-2">
                    <h3 className="font-semibold text-foreground">{message.user}</h3>
                    <span className="text-xs text-muted-foreground">{message.time}</span>
                  </div>
                  
                  <p className="text-foreground mb-3">{message.message}</p>
                  
                  {/* Interaction Buttons */}
                  <div className="flex items-center gap-4">
                    <button className="flex items-center gap-1 text-muted-foreground hover:text-terracotta transition-colors">
                      <Heart className="w-4 h-4" />
                      <span className="text-sm">{message.likes}</span>
                    </button>
                    
                    <button className="flex items-center gap-1 text-muted-foreground hover:text-terracotta transition-colors">
                      <MessageCircle className="w-4 h-4" />
                      <span className="text-sm">{message.replies}</span>
                    </button>
                    
                    <button className="flex items-center gap-1 text-muted-foreground hover:text-terracotta transition-colors">
                      <Share2 className="w-4 h-4" />
                      <span className="text-sm">Share</span>
                    </button>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
        
        {/* AI Enhanced Message Suggestion */}
        <Card className="shadow-card border-terracotta/20">
          <CardContent className="p-4">
            <div className="flex items-center gap-2 mb-2">
              <Sparkles className="w-4 h-4 text-terracotta" />
              <span className="text-sm font-medium text-terracotta">AI Suggestion</span>
            </div>
            <p className="text-muted-foreground text-sm">
              "Share your latest creation with the community! Tell them about your artistic journey and techniques."
            </p>
          </CardContent>
        </Card>
      </div>

      {/* Message Input */}
      <div className="p-6 bg-secondary/50 border-t border-border">
        <div className="flex gap-3">
          <Input
            placeholder="Text..."
            value={newMessage}
            onChange={(e) => setNewMessage(e.target.value)}
            onKeyPress={(e) => e.key === 'Enter' && handleSendMessage()}
            className="flex-1 bg-background"
          />
          <Button 
            variant="chat" 
            size="icon"
            onClick={handleSendMessage}
            className="shrink-0"
          >
            <Send className="w-4 h-4" />
          </Button>
        </div>
      </div>
    </div>
  );
};