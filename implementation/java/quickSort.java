import java.io.*;
import java.util.Random;

public class quickSort {
    public static void swap(int[] arr, int a, int b) {
        int temp = arr[a];
        arr[a] = arr[b];
        arr[b] = temp;
    }

    static Random rand = new Random();

    public static void quickSort(int[] arr, int L, int R) {
        if (L >= R)
            return;
        int pivot = rand.nextInt(R - L + 1) + L;
        swap(arr, pivot, L);
        pivot = arr[L];
        int left = L;
        int right = R;
        while (left < right) {
            while (pivot < arr[right])
                right -= 1;
            while (left < right && pivot >= arr[left])
                left += 1;
            swap(arr, left, right);
        }
        swap(arr, L, left);
        quickSort(arr, L, left - 1);
        quickSort(arr, left + 1, R);
    }
}
