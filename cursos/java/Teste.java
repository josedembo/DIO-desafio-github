package cursos.java;

import java.util.Scanner;

public class Teste {

    public static void name() {
        Scanner leitor = new Scanner(System.in);
        int valor1, valor2;

        System.out.println("Infome um valor: ");
        valor1 = leitor.nextInt();

        System.out.println("Infome o valor2");
        valor2 = leitor.nextInt();

        System.out.println(soma(valor1, valor2));

        leitor.close();
    }

    public static int soma(int valor1, int valor2) {
        int soma = valor1 + valor2;
        return soma;
    }
}