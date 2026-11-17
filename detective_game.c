
#include <stdio.h>
#include <string.h>

int main() {
    int choice, score = 0;
    int clue1 = 0, clue2 = 0, clue3 = 0;
    int answer;

    char suspects[3][20] = {
        "Manager",
        "Guard",
        "Cleaner"
    };

    printf("\n==================================\n");
    printf("      THE MYSTERY DETECTIVE\n");
    printf("       CASE: MISSING DIAMOND\n");
    printf("==================================\n");

    printf("\nA precious diamond has disappeared");
    printf("\nfrom the city museum!");
    printf("\nYou are the detective.");
    printf("\nFind clues and identify the thief.\n");

    printf("\nPress 1 to start investigation: ");
    scanf("%d", &choice);

    if (choice != 1) {
        printf("\nGame closed.\n");
        return 0;
    }

    printf("\n========== INVESTIGATION ==========\n");

    printf("\nCLUE 1: A muddy footprint was found");
    printf("\nnear the museum window.");
    printf("\n1. Collect clue");
    printf("\n2. Ignore clue");
    printf("\nEnter choice: ");
    scanf("%d", &choice);

    if (choice == 1) {
        clue1 = 1;
        score += 10;
        printf("Clue collected! +10 points\n");
    }

    printf("\nCLUE 2: A key was found near the office.");
    printf("\n1. Collect clue");
    printf("\n2. Ignore clue");
    printf("\nEnter choice: ");
    scanf("%d", &choice);

    if (choice == 1) {
        clue2 = 1;
        score += 10;
        printf("Clue collected! +10 points\n");
    }

    printf("\nCLUE 3: A note says 'Meet at midnight'.");
    printf("\n1. Collect clue");
    printf("\n2. Ignore clue");
    printf("\nEnter choice: ");
    scanf("%d", &choice);

    if (choice == 1) {
        clue3 = 1;
        score += 10;
        printf("Clue collected! +10 points\n");
    }

    printf("\n========== SUSPECTS ==========\n");

    printf("\n1. %s", suspects[0]);
    printf("\n2. %s", suspects[1]);
    printf("\n3. %s", suspects[2]);

    printf("\n\nWho do you think stole the diamond?");
    printf("\nEnter suspect number: ");
    scanf("%d", &answer);

    if (answer < 1 || answer > 3) {
        printf("\nInvalid suspect choice!\n");
        return 0;
    }

    printf("\n========== FINAL RESULT ==========\n");

    if (answer == 2 && clue1 && clue2 && clue3) {
        printf("\nAmazing Detective!");
        printf("\nYou solved the mystery!");
        score += 50;
    }
    else if (answer == 2) {
        printf("\nCorrect suspect!");
        printf("\nBut collect all clues next time.");
        score += 20;
    }
    else {
        printf("\nWrong suspect!");
        printf("\nThe Guard was responsible.");
    }

    printf("\n\nYour Detective Score: %d", score);
    printf("\n\nThanks for playing!\n");

    return 0;
}
