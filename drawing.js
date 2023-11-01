function extractWordsAfterAt(inputText) {
    // Split the input text into words
    var words = inputText.split(/\s+/);
  
    // Create an array to store words after @
    var wordsAfterAt = [];
  
    // Iterate through the words
    for (var i = 0; i < words.length; i++) {
      // Check if the word starts with "@" and is not just "@"
      if (words[i].startsWith("@") && words[i].length > 1) {
        // Remove any special characters from the word (e.g., punctuation)
        var cleanedWord = words[i].replace(/[^a-zA-Z0-9]/g, '');
  
        // Add the cleaned word (without @) to the wordsAfterAt array
        wordsAfterAt.push(cleanedWord.substring(1));
      }
    }
  
    return wordsAfterAt;
  }
  
  // Example usage
  var inputText = "This is a @sample text @with mentions and @more.";
  var result = extractWordsAfterAt(inputText);
  console.log("Words after @:", result);
  