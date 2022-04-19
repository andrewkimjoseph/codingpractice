# include <stdio.h>

int Square(int y){
    int z;
    z = y * y;
    printf("%d \n", z);
};

void HelloWorld () {
    printf("Hello World, Andrew Kim!\n");
};

int main (){
    
    HelloWorld();

    int a = 5;

    Square(a);

    return 0;
}