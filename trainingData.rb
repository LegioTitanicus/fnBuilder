require 'csv'

trainingData = [
    {language: "javascript", codeBlock: "const printfive = () => { console.log('FIVE') }", translation: "print five to the screen" },
    {language: "javascript", codeBlock: "const printfive = () => { console.log('Five') }", translation: "print five to the screen"},
    {language: "javascript", codeBlock: "const printfive = () => { console.log('five') }", translation: "print five to the screen"},
    {language: "javascript", codeBlock: "const printfive = () => { console.log('5') }", translation: "print five to the screen"},
    {language: "javascript", codeBlock: "const printfive = () => { console.log(5) }", translation: "print five to the screen"},
    {language: "javascript", codeBlock: "let printfive = () => { console.log(5) }", translation: "print five to the screen"},
    {language: "javascript", codeBlock: "let printfive = () => { console.log('five') }", translation: "print five to the screen"},
    {language: "javascript", codeBlock: "let printfive = () => { console.log('Five') }", translation: "print five to the screen"},
    {language: "javascript", codeBlock: "const printFive = () => { console.log('five') }", translation: "print five to the screen"},
    {language: "javascript", codeBlock: "const Printfive = () => { console.log('five') }", translation: "print five to the screen"},
    {language: "javascript", codeBlock: "const PrintFive = () => { console.log('five') }", translation: "print five to the screen"},

    {language: "javascript", codeBlock: "const printfive = () => { console.log(5) }", translation: "print five"},
    {language: "javascript", codeBlock: "const printfive = () => { console.log(5) }", translation: "Print five"},
    {language: "javascript", codeBlock: "const printfive = () => { console.log(5) }", translation: "Print five"},

    {language: "javascript", codeBlock: "const printfive = () => { console.log('FIVE') }", translation: "print 5 to the screen"},
    {language: "javascript", codeBlock: "const printfive = () => { console.log('Five') }", translation: "print 5 to the screen"},
    {language: "javascript", codeBlock: "const printfive = () => { console.log('five') }", translation: "print 5 to the screen"},
    {language: "javascript", codeBlock: "const printfive = () => { console.log('5') }", translation: "print 5 to the screen"},
    {language: "javascript", codeBlock: "const printfive = () => { console.log(5) }", translation: "print 5 to the screen"},
    {language: "javascript", codeBlock: "let printfive = () => { console.log(5) }", translation: "print 5 to the screen"},
    {language: "javascript", codeBlock: "let printfive = () => { console.log('five') }", translation: "print 5 to the screen"},
    {language: "javascript", codeBlock: "let printfive = () => { console.log('Five') }", translation: "print 5 to the screen"},
    {language: "javascript", codeBlock: "const printFive = () => { console.log('five') }", translation: "print 5 to the screen"},
    {language: "javascript", codeBlock: "const Printfive = () => { console.log('five') }", translation: "print 5 to the screen"},
    {language: "javascript", codeBlock: "const PrintFive = () => { console.log('five') }", translation: "print 5 to the screen"},
]



CSV.open("trainingData.csv", "wb") { |csv|
    trainingData.each do |s|
        csv << [s[:language], s[:codeBlock], s[:translation]]
    end
}




