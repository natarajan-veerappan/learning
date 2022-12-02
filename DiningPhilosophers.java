import java.util.concurrent.Semaphore;

public class DiningPhilosophers {

	static int count = 5;
	static Fork[] forks = new Fork[count];
	static Philosopher[] philosophers = new Philosopher[count];

	static class Fork {

		private Semaphore mutex = new Semaphore(1);

		public void acquire() {
			try {
				mutex.acquire();
			} catch (InterruptedException e) {
				e.printStackTrace();
			}
		}

		public void release() {
			mutex.release();
		}

	}
	
	static class Philosopher extends Thread {
		private int number;
		private Fork left;
		private Fork right;
		
		Philosopher(int number, Fork left, Fork right) {
			this.number = number;
			this.left = left;
			this.right = right;
		}
		
		public void run() {
			System.out.println("Philosopher" + number + " is thinking");
			System.out.println("Philosopher" + number + " is hungry");
			left.acquire();
			System.out.println("Philosopher" + number + " acquired the left fork");
			right.acquire();
			System.out.println("Philosopher" + number + " acquired the right fork");
			System.out.println("Philosopher" + number + " is eating");
			try {
				Thread.sleep(1000);
			} catch (InterruptedException e) {
				e.printStackTrace();
			}
			right.release();
			System.out.println("Philosopher" + number + " released the right fork");
			left.release();
			System.out.println("Philosopher" + number + " released the left fork");
			System.out.println("Philosopher" + number + " is finished eating and going back to thinking");
		}
		
	}
	
	public static void main(String[] arg) {
		
		for(int i=0; i<count; i++) {
			forks[i] = new Fork();
		}
		for(int i=0; i<count; i++) {
			philosophers[i] = new Philosopher(i, forks[i], forks[(i+1)%count]);
			philosophers[i].start();
		}

	}
	
}
