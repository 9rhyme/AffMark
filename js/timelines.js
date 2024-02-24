function initTimeline1(){
    var textWrapper = document.getElementById('ml1_letters-1');
  
  textWrapper.innerHTML = textWrapper.textContent.replace(/\S/g, "<span class='letter a letter-1'>$&</span>");
  
  textWrapper = document.getElementById('ml1_letters-2');
  
  textWrapper.innerHTML = textWrapper.textContent.replace(/\S/g, "<span class='letter letter-2'>$&</span>");
  
  textWrapper = document.getElementById('ml1_letters-3');
  
  textWrapper.innerHTML = textWrapper.textContent.replace(/\S/g, "<span class='letter letter-3'>$&</span>");
  textWrapper = document.getElementById('ml1_letters-4');
  
  textWrapper.innerHTML = textWrapper.textContent.replace(/\S/g, "<span class='letter letter-4'>$&</span>");
  
  
  var timeline1 = anime.timeline({autoplay:true, loop: true, 
       
    
        
    })
    .add({
      targets: '.ml1 .letter-1',
      scale: [0.3,1],
      opacity: [0,1],
      translateZ: 0,
      easing: "easeOutExpo",
      duration: 600,
      delay: (el, i) => 70 * (i+1),
      
    }).add({
      targets: '.ml1 .line',
      scaleX: [0,1],
      opacity: [0.5,1],
      easing: "easeOutExpo",
      duration: 700,
      offset: '-=875',
      delay: (el, i, l) => 80 * (l - i)
    }).add({
      targets: '.ml1 .letter-1, .ml1 .line',
      opacity: 0,
      duration: 1000,
      easing: "easeOutExpo",
      delay: 1000,
      
      
      
    }).add({
      targets: '.ml1 .letter-2',
      scale: [0.3,1],
      opacity: [0,1],
      translateZ: 0,
      easing: "easeOutExpo",
      duration: 600,
      delay: (el, i) => 70 * (i+1),
      
    }).add({
      targets: '.ml1 .line',
      scaleX: [0,1],
      opacity: [0.5,1],
      easing: "easeOutExpo",
      duration: 700,
      offset: '-=875',
      delay: (el, i, l) => 80 * (l - i)
    }).add({
      targets: '.ml1 .letter-2,  .ml1 .line',
      opacity: 0,
      duration: 1000,
      easing: "easeOutExpo",
      delay: 1000,
      
      
      
    })  .add({
      targets: '.ml1 .letter-3',
      scale: [0.3,1],
      opacity: [0,1],
      translateZ: 0,
      easing: "easeOutExpo",
      duration: 600,
      delay: (el, i) => 70 * (i+1),
      
    }).add({
      targets: '.ml1 .line',
      scaleX: [0,1],
      opacity: [0.5,1],
      easing: "easeOutExpo",
      duration: 700,
      offset: '-=875',
      delay: (el, i, l) => 80 * (l - i)
    }).add({
      targets: '.ml1 .letter-3, .ml1 .line',
      opacity: 0,
      duration: 1000,
      easing: "easeOutExpo",
      delay: 1000,
      
      
      
    }).add({
      targets: '.ml1 .letter-4',
      scale: [0.3,1],
      opacity: [0,1],
      translateZ: 0,
      easing: "easeOutExpo",
      duration: 600,
      delay: (el, i) => 70 * (i+1),
      
    }).add({
      targets: '.ml1 .line',
      scaleX: [0,1],
      opacity: [0.5,1],
      easing: "easeOutExpo",
      duration: 700,
      offset: '-=875',
      delay: (el, i, l) => 80 * (l - i)
    }).add({
      targets: '.ml1 .letter-4,  .ml1 .line',
      opacity: 0,
      duration: 1000,
      easing: "easeOutExpo",
      delay: 1000,
      
      
      
    }).add({
    targets:'.product-img',
      opacity: [0,1],
      duration: 1000,
      easing: "easeOutExpo",
      delay: 100,}
  ).add({
    targets:'.amazon-img',
      opacity: [0,1],
      duration: 1000,
      easing: "easeOutExpo",
      delay: 1000,
  }).add({
    targets:'img',
    duration:1000,
    opacity: [1,0],
    easing: "easeOutExpo",
      delay: 4000,
    complete:  function stopEvent(){
      
      isRecording = false;
      stopRecording();
  document.getElementById("compositions").style.width = '50%'
  document.getElementById("compositions").style.height = '50%'
  document.getElementById("compositions").style.top = 'auto'
  document.getElementById("compositions").style.left = 'auto'
  document.getElementById("img-container").style.width = '50%'
  document.getElementById("img-container").style.height = '50%'
  document.getElementById("img-container").style.top = 'auto'
  document.getElementById("img-container").style.left = 'auto'
  document.getElementById("bg_div").style.width = '50%'
  document.getElementById("bg_div").style.height = '50%'
  document.getElementById("bg_div").style.top = 'auto'
  document.getElementById("bg_div").style.left = 'auto'
  document.getElementById("header").style.display = "block"
  
startRecordBtn.disabled = false;
stopRecordBtn.disabled = true;
   }
  });
  return timeline1;
  }
  
  var timeline1 = initTimeline1()
    
  function initTimeline2(){
          
          
    // Wrap every letter in a span
    var textWrapper = document.getElementById('ml2_letters-1');
    
    textWrapper.innerHTML = textWrapper.textContent.replace(/\S/g, "<span class='letter letter-1'>$&</span>");
    
    textWrapper = document.getElementById('ml2_letters-2');
    
    textWrapper.innerHTML = textWrapper.textContent.replace(/\S/g, "<span class='letter letter-2'>$&</span>");
    
    textWrapper = document.getElementById('ml2_letters-3');
    
    textWrapper.innerHTML = textWrapper.textContent.replace(/\S/g, "<span class='letter letter-3'>$&</span>");
    textWrapper = document.getElementById('ml2_letters-4');
    
    textWrapper.innerHTML = textWrapper.textContent.replace(/\S/g, "<span class='letter letter-4'>$&</span>");
    
    var timeline2 = anime.timeline({autoplay:false, loop: true,
       
    
        
    })
      .add({
        targets: '.ml2 .letter-1',
        scale: [4,1],
        opacity: [0,1],
        translateZ: 0,
        easing: "easeOutExpo",
        duration: 950,
        delay: (el, i) => 70*i
      }).add({
        targets: '.ml2 .letter-1',
        opacity: 0,
        duration: 1000,
        easing: "easeOutExpo",
        delay: 1000,
        
      }).add({
        targets: '.ml2 .letter-2',
        scale: [4,1],
        opacity: [0,1],
        translateZ: 0,
        easing: "easeOutExpo",
        duration: 950,
        delay: (el, i) => 70*i
      }).add({
        targets: '.ml2 .letter-2',
        opacity: 0,
        duration: 1000,
        easing: "easeOutExpo",
        delay: 1000,
        
      }).add({
        targets: '.ml2 .letter-3',
        scale: [4,1],
        opacity: [0,1],
        translateZ: 0,
        easing: "easeOutExpo",
        duration: 950,
        delay: (el, i) => 70*i
      }).add({
        targets: '.ml2 .letter-3',
        opacity: 0,
        duration: 1000,
        easing: "easeOutExpo",
        delay: 1000,
        
      }).add({
        targets: '.ml2 .letter-4',
        scale: [4,1],
        opacity: [0,1],
        translateZ: 0,
        easing: "easeOutExpo",
        duration: 950,
        delay: (el, i) => 70*i
      }).add({
        targets: '.ml2 .letter-4',
        opacity: 0,
        duration: 1000,
        easing: "easeOutExpo",
        delay: 1000,
        
      }).add({
      targets:'.product-img',
        opacity: [0,1],
        duration: 1000,
        easing: "easeOutExpo",
        delay: 100,}
    ).add({
      targets:'.amazon-img',
        opacity: [0,1],
        duration: 1000,
        easing: "easeOutExpo",
        delay: 1000,
    }).add({
      targets:'img',
      duration:1000,
      opacity: [1,0],
      easing: "easeOutExpo",
        delay: 4000,
        complete:  function stopEvent(){
        
        isRecording = false;
        stopRecording();
    document.getElementById("compositions").style.width = '50%'
    document.getElementById("compositions").style.height = '50%'
    document.getElementById("compositions").style.top = 'auto'
    document.getElementById("compositions").style.left = 'auto'
    document.getElementById("img-container").style.width = '50%'
    document.getElementById("img-container").style.height = '50%'
    document.getElementById("img-container").style.top = 'auto'
    document.getElementById("img-container").style.left = 'auto'
    document.getElementById("bg_div").style.width = '50%'
    document.getElementById("bg_div").style.height = '50%'
    document.getElementById("bg_div").style.top = 'auto'
    document.getElementById("bg_div").style.left = 'auto'
    document.getElementById("header").style.display = "block"
    
startRecordBtn.disabled = false;
stopRecordBtn.disabled = true;
     }
    });
    return timeline2;
    }
    
    var timeline2 = initTimeline2()
  
  
    function initTimeline3(){
        // Wrap every letter in a span
        var textWrapper = document.getElementById('ml3_letters-1');
        
        textWrapper.innerHTML = textWrapper.textContent.replace(/\S/g, "<span class='letter letter-1'>$&</span>");
        
        textWrapper = document.getElementById('ml3_letters-2');
        
        textWrapper.innerHTML = textWrapper.textContent.replace(/\S/g, "<span class='letter letter-2'>$&</span>");
        
        textWrapper = document.getElementById('ml3_letters-3');
        
        textWrapper.innerHTML = textWrapper.textContent.replace(/\S/g, "<span class='letter letter-3'>$&</span>");
        textWrapper = document.getElementById('ml3_letters-4');
        
        textWrapper.innerHTML = textWrapper.textContent.replace(/\S/g, "<span class='letter letter-4'>$&</span>");
        
        
        timeline3 = anime.timeline({loop: true,autoplay:false})
          .add({
            targets: '.ml3 .letter-1',
            opacity: [0,1],
            easing: "easeInOutQuad",
            duration: 2250,
            delay: (el, i) => 150 * (i+1)
          }).add({
            targets: '.tw1',
            opacity: 0,
            duration: 1000,
            easing: "easeOutExpo",
            delay: 1000
          }).add({
            targets: '.ml3 .letter-2',
            opacity: [0,1],
            easing: "easeInOutQuad",
            duration: 2250,
            delay: (el, i) => 150 * (i+1)
          }).add({
            targets: '.tw2',
            opacity: 0,
            duration: 1000,
            easing: "easeOutExpo",
            delay: 1000
          }).add({
            targets: '.ml3 .letter-3',
            opacity: [0,1],
            easing: "easeInOutQuad",
            duration: 2250,
            delay: (el, i) => 150 * (i+1)
          }).add({
            targets: '.tw3',
            opacity: 0,
            duration: 1000,
            easing: "easeOutExpo",
            delay: 1000
          }).add({
            targets: '.ml3 .letter-4',
            opacity: [0,1],
            easing: "easeInOutQuad",
            duration: 2250,
            delay: (el, i) => 150 * (i+1)
          }).add({
            targets: '.tw4',
            opacity: 0,
            duration: 1000,
            easing: "easeOutExpo",
            delay: 1000
          }).add({
          targets:'.product-img',
            opacity: [0,1],
            duration: 1000,
            easing: "easeOutExpo",
            delay: 100,}
        ).add({
          targets:'.amazon-img',
            opacity: [0,1],
            duration: 1000,
            easing: "easeOutExpo",
            delay: 1000,
        }).add({
          targets:'img',
          duration:1000,
          opacity: [1,0],
          easing: "easeOutExpo",
            delay: 4000,
            complete:  function stopEvent(){
            
            isRecording = false;
            stopRecording();
        document.getElementById("compositions").style.width = '50%'
        document.getElementById("compositions").style.height = '50%'
        document.getElementById("compositions").style.top = 'auto'
        document.getElementById("compositions").style.left = 'auto'
        document.getElementById("img-container").style.width = '50%'
        document.getElementById("img-container").style.height = '50%'
        document.getElementById("img-container").style.top = 'auto'
        document.getElementById("img-container").style.left = 'auto'
        document.getElementById("bg_div").style.width = '50%'
        document.getElementById("bg_div").style.height = '50%'
        document.getElementById("bg_div").style.top = 'auto'
        document.getElementById("bg_div").style.left = 'auto'
        document.getElementById("header").style.display = "block"
        
startRecordBtn.disabled = false;
stopRecordBtn.disabled = true;
         }
        });
        return timeline3;
        }
        var timeline3 = initTimeline3();


         
          function initTimeline4(){
          var ml4 = {};
          ml4.opacityIn = [0,1];
          ml4.scaleIn = [0.2, 1];
          ml4.scaleOut = 3;
          ml4.durationIn = 800;
          ml4.durationOut = 600;
          ml4.delay = 500;
          
          timeline4 = anime.timeline({loop: true,autoplay:false})
            .add({
              targets: '.ml4 .letters-1',
              opacity: ml4.opacityIn,
              scale: ml4.scaleIn,
              duration: ml4.durationIn
            }).add({
              targets: '.ml4 .letters-1',
              opacity: 0,
              scale: ml4.scaleOut,
              duration: ml4.durationOut,
              easing: "easeInExpo",
              delay: ml4.delay
            }).add({
              targets: '.ml4 .letters-2',
              opacity: ml4.opacityIn,
              scale: ml4.scaleIn,
              duration: ml4.durationIn
            }).add({
              targets: '.ml4 .letters-2',
              opacity: 0,
              scale: ml4.scaleOut,
              duration: ml4.durationOut,
              easing: "easeInExpo",
              delay: ml4.delay
            }).add({
              targets: '.ml4 .letters-3',
              opacity: ml4.opacityIn,
              scale: ml4.scaleIn,
              duration: ml4.durationIn
            }).add({
              targets: '.ml4 .letters-3',
              opacity: 0,
              scale: ml4.scaleOut,
              duration: ml4.durationOut,
              easing: "easeInExpo",
              delay: ml4.delay
            }).add({
              targets: '.ml4 .letters-4',
              opacity: ml4.opacityIn,
              scale: ml4.scaleIn,
              duration: ml4.durationIn
            }).add({
              targets: '.ml4 .letters-4',
              opacity: 0,
              scale: ml4.scaleOut,
              duration: ml4.durationOut,
              easing: "easeInExpo",
              delay: ml4.delay
            }).add({
              targets: '.ml4',
              opacity: 0,
              duration: 500,
              delay: 500
            }).add({
            targets:'.product-img',
              opacity: [0,1],
              duration: 1000,
              easing: "easeOutExpo",
              delay: 100,}
          ).add({
            targets:'.amazon-img',
              opacity: [0,1],
              duration: 1000,
              easing: "easeOutExpo",
              delay: 100,
          }).add({
            targets:'img',
            duration:1000,
            opacity: [1,0],
            easing: "easeOutExpo",
              delay: 4000,
              complete:  function stopEvent(){
              
              isRecording = false;
              stopRecording();   
          document.getElementById("compositions").style.width = '50%'
          document.getElementById("compositions").style.height = '50%'
          document.getElementById("compositions").style.top = 'auto'
          document.getElementById("compositions").style.left = 'auto'
          document.getElementById("img-container").style.width = '50%'
          document.getElementById("img-container").style.height = '50%'
          document.getElementById("img-container").style.top = 'auto'
          document.getElementById("img-container").style.left = 'auto'
          document.getElementById("bg_div").style.width = '50%'
          document.getElementById("bg_div").style.height = '50%'
          document.getElementById("bg_div").style.top = 'auto'
          document.getElementById("bg_div").style.left = 'auto'
          document.getElementById("header").style.display = "block"
          
  startRecordBtn.disabled = false;
  stopRecordBtn.disabled = true;
           }
          });
          return timeline4;
          }
          var timeline4 = initTimeline4();
          function initTimeline5(){
            timeline5 = anime.timeline({loop: true})
              .add({
                targets: '.ml5 .line',
                opacity: [0.5,1],
                scaleX: [0, 1],
                easing: "easeInOutExpo",
                duration: 700
              }).add({
                targets: '.ml5 .line',
                duration: 600,
                easing: "easeOutExpo",
                translateY: (el, i) => (-0.625 + 0.625*2*i) + "em"
              }).add({
                targets: '.ml5 .ampersand',
                opacity: [0,1],
                scaleY: [0.5, 1],
                easing: "easeOutExpo",
                duration: 600,
                offset: '-=600'
              }).add({
                targets: '.ml5 .letters-left',
                opacity: [0,1],
                translateX: ["0.5em", 0],
                easing: "easeOutExpo",
                duration: 600,
                offset: '-=300'
              }).add({
                targets: '.ml5 .letters-right',
                opacity: [0,1],
                translateX: ["-0.5em", 0],
                easing: "easeOutExpo",
                duration: 600,
                offset: '-=600'
              }).add({
                targets: '.ml5',
                opacity: 0,
                duration: 1000,
                easing: "easeOutExpo",
                delay: 1000,
                complete:  function stopEvent(){
                
                isRecording = false;
                stopRecording();
            document.getElementById("compositions").style.width = '50%'
            document.getElementById("compositions").style.height = '50%'
            document.getElementById("compositions").style.top = 'auto'
            document.getElementById("compositions").style.left = 'auto'
            document.getElementById("img-container").style.width = '50%'
            document.getElementById("img-container").style.height = '50%'
            document.getElementById("img-container").style.top = 'auto'
            document.getElementById("img-container").style.left = 'auto'
            document.getElementById("bg_div").style.width = '50%'
            document.getElementById("bg_div").style.height = '50%'
            document.getElementById("bg_div").style.top = 'auto'
            document.getElementById("bg_div").style.left = 'auto'
            document.getElementById("header").style.display = "block"
            
    startRecordBtn.disabled = false;
    stopRecordBtn.disabled = true;
             }
              });
              return timeline5;
            }
            var timeline5 = initTimeline5();

            function initTimeline6(){
                // Wrap every letter in a span
                var textWrapper = document.getElementById('ml6_letters-1');
                
                textWrapper.innerHTML = textWrapper.textContent.replace(/\S/g, "<span class='letter letter-1'>$&</span>");
                
                textWrapper = document.getElementById('ml6_letters-2');
                
                textWrapper.innerHTML = textWrapper.textContent.replace(/\S/g, "<span class='letter letter-2'>$&</span>");
                
                textWrapper = document.getElementById('ml6_letters-3');
                
                textWrapper.innerHTML = textWrapper.textContent.replace(/\S/g, "<span class='letter letter-3'>$&</span>");
                textWrapper = document.getElementById('ml6_letters-4');
                
                textWrapper.innerHTML = textWrapper.textContent.replace(/\S/g, "<span class='letter letter-4'>$&</span>");
                
                
                var timeline6 = anime.timeline({autoplay:false, loop: true})
                  .add({
                    targets: '.ml6 .letter-1',
                    translateY: ["1.1em", 0],
                    translateZ: 0,
                    duration: 750,
                    delay: (el, i) => 50 * i
                  }).add({
                    targets: '.ml6 .letter-1',
                    opacity: 0,
                    duration: 1000,
                    easing: "easeOutExpo",
                    delay: 1000
                  }).add({
                    targets: '.ml6 .letter-2',
                    translateY: ["1.1em", 0],
                    translateZ: 0,
                    duration: 750,
                    delay: (el, i) => 50 * i
                  }).add({
                    targets: '.ml6 .letter-2',
                    opacity: 0,
                    duration: 1000,
                    easing: "easeOutExpo",
                    delay: 1000
                  }).add({
                    targets: '.ml6 .letter-3',
                    translateY: ["1.1em", 0],
                    translateZ: 0,
                    duration: 750,
                    delay: (el, i) => 50 * i
                  }).add({
                    targets: '.ml6 .letter-3',
                    opacity: 0,
                    duration: 1000,
                    easing: "easeOutExpo",
                    delay: 1000
                  }).add({
                    targets: '.ml6 .letter-4',
                    translateY: ["1.1em", 0],
                    translateZ: 0,
                    duration: 750,
                    delay: (el, i) => 50 * i
                  }).add({
                    targets: '.ml6 .letter-4',
                    opacity: 0,
                    duration: 1000,
                    easing: "easeOutExpo",
                    delay: 1000
                  }).add({
                  targets:'.product-img',
                    opacity: [0,1],
                    duration: 1000,
                    easing: "easeOutExpo",
                    delay: 100,}
                ).add({
                  targets:'.amazon-img',
                    opacity: [0,1],
                    duration: 1000,
                    easing: "easeOutExpo",
                    delay: 1000,
                }).add({
                  targets:'img',
                  duration:1000,
                  opacity: [1,0],
                  easing: "easeOutExpo",
                    delay: 4000,
                    complete:  function stopEvent(){
                    
                    isRecording = false;
                    stopRecording();
                document.getElementById("compositions").style.width = '50%'
                document.getElementById("compositions").style.height = '50%'
                document.getElementById("compositions").style.top = 'auto'
                document.getElementById("compositions").style.left = 'auto'
                document.getElementById("img-container").style.width = '50%'
                document.getElementById("img-container").style.height = '50%'
                document.getElementById("img-container").style.top = 'auto'
                document.getElementById("img-container").style.left = 'auto'
                document.getElementById("header").style.display = "block"
                document.getElementById("bg_div").style.width = '50%'
                document.getElementById("bg_div").style.height = '50%'
                document.getElementById("bg_div").style.top = 'auto'
                document.getElementById("bg_div").style.left = 'auto'
                 
        startRecordBtn.disabled = false;
        stopRecordBtn.disabled = true;
                 }
                });
                return timeline6;
                }
                var timeline6 = initTimeline6();

                function initTimeline7(){
                    // Wrap every letter in a span
                    var textWrapper = document.getElementById('ml7_letters-1');
                    
                    textWrapper.innerHTML = textWrapper.textContent.replace(/\S/g, "<span class='letter letter-1'>$&</span>");
                    
                    textWrapper = document.getElementById('ml7_letters-2');
                    
                    textWrapper.innerHTML = textWrapper.textContent.replace(/\S/g, "<span class='letter letter-2'>$&</span>");
                    
                    textWrapper = document.getElementById('ml7_letters-3');
                    
                    textWrapper.innerHTML = textWrapper.textContent.replace(/\S/g, "<span class='letter letter-3'>$&</span>");
                    textWrapper = document.getElementById('ml7_letters-4');
                    
                    textWrapper.innerHTML = textWrapper.textContent.replace(/\S/g, "<span class='letter letter-4'>$&</span>");
                    
                    
                    timeline7 = anime.timeline({loop: true,autoplay:false})
                      .add({
                        targets: '.ml7 .letter-1',
                        translateY: ["1.1em", 0],
                        translateX: ["0.55em", 0],
                        translateZ: 0,
                        rotateZ: [180, 0],
                        duration: 750,
                        easing: "easeOutExpo",
                        delay: (el, i) => 50 * i
                      }).add({
                        targets: '.ml7 .letter-1',
                        opacity: 0,
                        duration: 1000,
                        easing: "easeOutExpo",
                        delay: 1000
                      }).add({
                        targets: '.ml7 .letter-2',
                        translateY: ["1.1em", 0],
                        translateX: ["0.55em", 0],
                        translateZ: 0,
                        rotateZ: [180, 0],
                        duration: 750,
                        easing: "easeOutExpo",
                        delay: (el, i) => 50 * i
                      }).add({
                        targets: '.ml7 .letter-2',
                        opacity: 0,
                        duration: 1000,
                        easing: "easeOutExpo",
                        delay: 1000
                      }).add({
                        targets: '.ml7 .letter-3',
                        translateY: ["1.1em", 0],
                        translateX: ["0.55em", 0],
                        translateZ: 0,
                        rotateZ: [180, 0],
                        duration: 750,
                        easing: "easeOutExpo",
                        delay: (el, i) => 50 * i
                      }).add({
                        targets: '.ml7 .letter-3',
                        opacity: 0,
                        duration: 1000,
                        easing: "easeOutExpo",
                        delay: 1000
                      }).add({
                        targets: '.ml7 .letter-4',
                        translateY: ["1.1em", 0],
                        translateX: ["0.55em", 0],
                        translateZ: 0,
                        rotateZ: [180, 0],
                        duration: 750,
                        easing: "easeOutExpo",
                        delay: (el, i) => 50 * i
                      }).add({
                        targets: '.ml7 .letter-4',
                        opacity: 0,
                        duration: 1000,
                        easing: "easeOutExpo",
                        delay: 1000
                      }).add({
                      targets:'.product-img',
                        opacity: [0,1],
                        duration: 1000,
                        easing: "easeOutExpo",
                        delay: 100,}
                    ).add({
                      targets:'.amazon-img',
                        opacity: [0,1],
                        duration: 1000,
                        easing: "easeOutExpo",
                        delay: 1000,
                    }).add({
                      targets:'img',
                      duration:1000,
                      opacity: [1,0],
                      easing: "easeOutExpo",
                        delay: 4000,
                        complete:  function stopEvent(){
                        
                        isRecording = false;
                        stopRecording();
                    document.getElementById("compositions").style.width = '50%'
                    document.getElementById("compositions").style.height = '50%'
                    document.getElementById("compositions").style.top = 'auto'
                    document.getElementById("compositions").style.left = 'auto'
                    document.getElementById("img-container").style.width = '50%'
                    document.getElementById("img-container").style.height = '50%'
                    document.getElementById("img-container").style.top = 'auto'
                    document.getElementById("img-container").style.left = 'auto'
                    document.getElementById("header").style.display = "block"
                    document.getElementById("bg_div").style.width = '50%'
                    document.getElementById("bg_div").style.height = '50%'
                    document.getElementById("bg_div").style.top = 'auto'
                    document.getElementById("bg_div").style.left = 'auto'
                     
            startRecordBtn.disabled = false;
            stopRecordBtn.disabled = true;
                     }
                    });
                    return timeline7;
                    }
                    var timeline7 = initTimeline7();
                    function initTimeline8(){
                        timeline8= anime.timeline({loop: true})
                          .add({
                            targets: '.ml8 .circle-white',
                            scale: [0, 3],
                            opacity: [1, 0],
                            easing: "easeInOutExpo",
                            rotateZ: 360,
                            duration: 1100
                          }).add({
                            targets: '.ml8 .circle-container',
                            scale: [0, 1],
                            duration: 1100,
                            easing: "easeInOutExpo",
                            offset: '-=1000'
                          }).add({
                            targets: '.ml8 .circle-dark',
                            scale: [0, 1],
                            duration: 1100,
                            easing: "easeOutExpo",
                            offset: '-=600'
                          }).add({
                            targets: '.ml8 .letters-left',
                            scale: [0, 1],
                            duration: 1200,
                            offset: '-=550'
                          }).add({
                            targets: '.ml8 .bang',
                            scale: [0, 1],
                            rotateZ: [45, 15],
                            duration: 1200,
                            offset: '-=1000'
                          }).add({
                            targets: '.ml8',
                            opacity: 0,
                            duration: 1000,
                            easing: "easeOutExpo",
                            delay: 1400
                          });
                        
                        anime({
                          targets: '.ml8 .circle-dark-dashed',
                          rotateZ: 360,
                          duration: 8000,
                          easing: "linear",
                          loop: true
                        });
                        return timeline8;
                        }
                        var timeline8 = initTimeline8();