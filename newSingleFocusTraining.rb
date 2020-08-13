require 'csv'

# translation,codeBlock


# CSV.open("trainingData.csv", "wb", headers: true) do |csv|
#     i = 1
#     while i < 1001
#         csv << ["print '#{i}' to the screen","const printNumber = () => { console.log('#{i}') }"]
#         i += 1
#     end
# end

CSV.open("trainingData.csv", "wb", headers: true) do |csv|
    i = 1
    while i < 1001
        csv << ["print '#{i}' to the screen","const printNumber console.log('#{i}')"]
        i += 1
    end
end


# CSV.open("cats.csv", "w") do |csv|
#     csv << [:white, 2]
#   end