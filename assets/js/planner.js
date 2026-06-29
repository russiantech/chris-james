/* ============================================
   ACADEMIC PLANNER - TASK MANAGEMENT SYSTEM
   COS 106 - Introduction to Web Technologies
   Miva Open University
   Features: Add, Complete, Delete, Filter, Stats, localStorage
   ============================================ */

document.addEventListener('DOMContentLoaded', function() {
    initPlanner();
});

function initPlanner() {
    // State management
    let tasks = JSON.parse(localStorage.getItem('academicTasks')) || getDefaultTasks();
    let currentFilter = 'all';

    // DOM Elements
    const taskForm = document.getElementById('taskForm');
    const taskList = document.getElementById('taskList');
    const emptyState = document.getElementById('emptyState');
    const filterBtns = document.querySelectorAll('.filter-btn');

    // Stats elements
    const totalEl = document.getElementById('totalTasks');
    const pendingEl = document.getElementById('pendingTasks');
    const completedEl = document.getElementById('completedTasks');
    const rateEl = document.getElementById('completionRate');

    // Initialize
    renderTasks();
    updateStats();

    // Form submission handler
    if (taskForm) {
        taskForm.addEventListener('submit', function(e) {
            e.preventDefault();

            const title = document.getElementById('taskTitle').value.trim();
            const category = document.getElementById('taskCategory').value;
            const priority = document.getElementById('taskPriority').value;
            const dueDate = document.getElementById('taskDue').value;

            if (!title || !dueDate) return;

            const newTask = {
                id: generateId(),
                title: title,
                category: category,
                priority: priority,
                dueDate: dueDate,
                completed: false,
                createdAt: new Date().toISOString()
            };

            tasks.push(newTask);
            saveTasks();
            renderTasks();
            updateStats();

            // Reset form
            taskForm.reset();

            // Visual feedback
            showNotification('Task added successfully!');
        });
    }

    // Filter button handlers
    filterBtns.forEach(btn => {
        btn.addEventListener('click', function() {
            filterBtns.forEach(b => b.classList.remove('active'));
            this.classList.add('active');
            currentFilter = this.dataset.filter;
            renderTasks();
        });
    });

    // Render tasks to DOM
    function renderTasks() {
        let filtered = tasks;

        if (currentFilter === 'pending') {
            filtered = tasks.filter(t => !t.completed);
        } else if (currentFilter === 'completed') {
            filtered = tasks.filter(t => t.completed);
        } else if (currentFilter === 'high') {
            filtered = tasks.filter(t => t.priority === 'high');
        }

        // Sort: incomplete first, then by due date
        filtered.sort((a, b) => {
            if (a.completed !== b.completed) return a.completed ? 1 : -1;
            return new Date(a.dueDate) - new Date(b.dueDate);
        });

        taskList.innerHTML = '';

        if (filtered.length === 0) {
            emptyState.classList.add('active');
        } else {
            emptyState.classList.remove('active');

            filtered.forEach(task => {
                const taskEl = createTaskElement(task);
                taskList.appendChild(taskEl);
            });
        }
    }

    // Create single task DOM element
    function createTaskElement(task) {
        const div = document.createElement('div');
        div.className = `task-item ${task.completed ? 'completed' : ''}`;
        div.dataset.id = task.id;

        const dueFormatted = formatDate(task.dueDate);
        const isOverdue = !task.completed && new Date(task.dueDate) < new Date().setHours(0,0,0,0);

        div.innerHTML = `
            <div class="task-checkbox ${task.completed ? 'checked' : ''}" onclick="toggleTask('${task.id}')"></div>
            <div class="task-content">
                <div class="task-title">${escapeHtml(task.title)}</div>
                <div class="task-meta">
                    <span class="task-category ${task.category}">${task.category}</span>
                    <span class="task-priority ${task.priority}">${task.priority}</span>
                    <span style="${isOverdue ? 'color: var(--danger); font-weight: 600;' : ''}">Due: ${dueFormatted}${isOverdue ? ' (Overdue)' : ''}</span>
                </div>
            </div>
            <button class="task-delete" onclick="deleteTask('${task.id}')"><i class="fas fa-trash"></i></button>
        `;

        return div;
    }

    // Toggle task completion status
    window.toggleTask = function(id) {
        const task = tasks.find(t => t.id === id);
        if (task) {
            task.completed = !task.completed;
            saveTasks();
            renderTasks();
            updateStats();
        }
    };

    // Delete task from array
    window.deleteTask = function(id) {
        if (confirm('Are you sure you want to delete this task?')) {
            tasks = tasks.filter(t => t.id !== id);
            saveTasks();
            renderTasks();
            updateStats();
        }
    };

    // Update statistics display
    function updateStats() {
        const total = tasks.length;
        const completed = tasks.filter(t => t.completed).length;
        const pending = total - completed;
        const rate = total > 0 ? Math.round((completed / total) * 100) : 0;

        if (totalEl) totalEl.textContent = total;
        if (pendingEl) pendingEl.textContent = pending;
        if (completedEl) completedEl.textContent = completed;
        if (rateEl) rateEl.textContent = rate + '%';
    }

    // Persist to localStorage
    function saveTasks() {
        localStorage.setItem('academicTasks', JSON.stringify(tasks));
    }

    // Default sample tasks for first-time users
    function getDefaultTasks() {
        return [
            {
                id: generateId(),
                title: 'Complete COS 106 Term Project - Portfolio Website',
                category: 'project',
                priority: 'high',
                dueDate: '2026-07-15',
                completed: true,
                createdAt: new Date().toISOString()
            },
            {
                id: generateId(),
                title: 'Submit MIVA-COS 111 Micro-Credentials (3 AWS Certs)',
                category: 'certification',
                priority: 'high',
                dueDate: '2026-06-30',
                completed: true,
                createdAt: new Date().toISOString()
            },
            {
                id: generateId(),
                title: 'Study for MAT 102 Mid-Semester Exam',
                category: 'exam',
                priority: 'high',
                dueDate: '2026-07-10',
                completed: false,
                createdAt: new Date().toISOString()
            },
            {
                id: generateId(),
                title: 'Read Chapter 5: Data Structures & Algorithms',
                category: 'reading',
                priority: 'medium',
                dueDate: '2026-07-05',
                completed: false,
                createdAt: new Date().toISOString()
            },
            {
                id: generateId(),
                title: 'Complete PHY 102 Lab Report',
                category: 'assignment',
                priority: 'medium',
                dueDate: '2026-07-08',
                completed: false,
                createdAt: new Date().toISOString()
            }
        ];
    }
}

// Utility: Escape HTML to prevent XSS
function escapeHtml(text) {
    const div = document.createElement('div');
    div.textContent = text;
    return div.innerHTML;
}

// Utility: Show toast notification
function showNotification(message) {
    const notif = document.createElement('div');
    notif.style.cssText = `
        position: fixed;
        top: 90px;
        right: 24px;
        background: var(--success);
        color: white;
        padding: 12px 24px;
        border-radius: 8px;
        font-weight: 600;
        z-index: 9999;
        animation: slideIn 0.3s ease;
        font-family: 'Inter', sans-serif;
    `;
    notif.textContent = message;
    document.body.appendChild(notif);

    setTimeout(() => {
        notif.style.animation = 'slideOut 0.3s ease';
        setTimeout(() => notif.remove(), 300);
    }, 3000);
}
