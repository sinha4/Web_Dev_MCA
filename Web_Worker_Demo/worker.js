self.onmessage = function(event) {
    const text = event.data;
  
    const wordCount = text.trim().split(/\s+/).filter(Boolean).length;
    const charCount = text.replace(/\s/g, "").length;
    const readingTime = Math.ceil(wordCount / 3);
  
    postMessage({
      words: wordCount,
      chars: charCount,
      time: readingTime
    });
  };
  