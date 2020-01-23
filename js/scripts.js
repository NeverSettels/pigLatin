function pigLatin(str){
    var arrStr = str.toLowerCase().split(' ');
    var vowels = ['a','e','i','o','u'];
    var pigArr = []
    var consonants = ['b','c','d','f','g','h','j', 'k', 'l', 'm','n','p', 'q', 'r','s','t', 'v', 'w', 'x', 'y', 'z'] 
    arrStr.forEach(function(word,i){
      
    if(vowels.includes(word[0])){
        word = word +'way'
        pigArr.push(word)
    }
    else if(word[0]==='q' && word[1]==='u'){
      word = word + word[0]+word[1] + 'ey'
      word = word.substr(2,word.length-1)
      pigArr.push(word)
    } 
    else{
      let counter = 0;
      for(let index = 0; index<=2; ++index){
        
        if(consonants.includes(word[index])){
          console.log(word[index])
          counter++
        }
        else if (vowels.includes(word[index])){
          break;
        }
      }
      console.log(counter)
      word = word + word.substr(0,counter) + 'ey'
      word = word.substr(counter,word.length-1)
      pigArr.push(word)
  
    }
     })
    return pigArr.join(' ')
  }

  $(document).ready(function(){
      $('#form1').submit(function(event){
        event.preventDefault()

        var input = $('#input').val()
        var result = pigLatin(input)

        $('#pig').text(result)

      })
  })