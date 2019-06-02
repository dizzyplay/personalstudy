class Sol:
    def twoSum(self,nums,target):
        subArr = list(map(lambda v:target-v,nums))
        answer=[]
        for i in range(len(subArr)):
            try:
                index=nums.index(subArr[i])
                if index != i:
                    answer.append(i)
                    answer.append(index)
                    break
            except:
                pass
        return answer


s=Sol()
print(s.twoSum([1,2,3,4,5],3))
