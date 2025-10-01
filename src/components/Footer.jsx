import { ArrowUp } from "lucide-react";

export const Footer = () => {
  return (
    <footer className="py-6 px-4 bg-card border-t border-border mt-12">
      <p className="text-sm text-muted-foreground text-center">
        &copy; {new Date().getFullYear()} Nimisha Subhash. All rights reserved.
      </p>
      <a href="#hero" className="p-2 rounded-full bg-primary/10 hover:bg-primary/20 text-primary transition-colors">
<ArrowUp size={20}/>
      </a>
    </footer>
  );
};
