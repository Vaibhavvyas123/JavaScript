function isMagicSquare()
{
    var n=math.length  
     var sum1=0;
     var sum2=0;
     for(vari=0;i<n;i++)
     {
         sum1=sum1+math[i][i];
         sum2=sum2+math[i][n-1-i];
     }
     if(sum1=!sum2)
     return false;
     
}